/* eslint-disable consistent-return */
/* eslint-disable camelcase */
const Prescription = require('./prescription.model');
const validation = require('./prescriptions.validation');

const addPrescription = async (req, res) => {
  try {
    const { error } = validation.validatePrescription(req.body);

    if (error) {
      return res.status(422).json({
        message: error.details[0].message,
      });
    }

    const { userId } = req;
    // eslint-disable-next-line prefer-const
    let { drug, unit, completed, start_Date, end_Date } = req.body;

    start_Date = new Date(start_Date).toDateString();

    end_Date = new Date(end_Date).toDateString();

    const doc = new Prescription({
      userId,
      drug,
      start_Date,
      end_Date,
      completed,
      unit,
    });
    await doc.save();

    return res.status(201).json({
      message: 'Prescription added successfuly',
      prescription: doc,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: `${error.message}` || 'Something went wrong',
    });
  }
};

const deletePrescription = (req, res) => {
  const { _id } = req.params;
  const { userId } = req;

  Prescription.findOne({ _id }, (err, prescription) => {
    if (err) {
      return res.status(500).json({
        message: err,
      });
    }
    if (!prescription) {
      return res.status(404).json({
        message: 'prescription not found',
      });
    }
    if (prescription.userId !== userId) {
      return res.status(403).json({
        message: 'Sorry, you can not delete this prescription',
      });
    }

    Prescription.deleteOne({ _id }, (error, result) => {
      if (error) {
        return res.status(500).json({
          message: error,
        });
      }

      if (result) {
        return res.status(200).json({
          message: 'prescription deleted successfully',
          prescription,
        });
      }
    });
  });
};


const verifyCompletion = async (req, res) => {
  const updateparamters = req.body;
  const { _id } = req.params;
  const { userId } = req;
  try {
    const prescription = await Prescription.find({ _id });

    if (!prescription) {
      return res.status(404).json({
        message: 'Prescription not found',
      });
    }

    if (prescription && (prescription[0].userId !== userId)) {
      return res.status(409).json({
        message: "Sorry, you can't update this prescription",
      });
    }

    const updatedPrescription = await Prescription.update({ _id },
      { $set: updateparamters });
    if (updatedPrescription) {
      return res.status(200).json({
        message: 'Dose completed',
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: error.message || 'Something went wrong',
    });
  }
};

const getSpecificPrescription = (req, res) => {
  const { _id } = req.params;
  const { userId } = req;
  try {
    Prescription.findOne({ _id }, (err, prescription) => {
      if (!prescription) {
        return res.status(404).json({
          message: 'no prescription found',
        });
      }
      if (prescription.userId !== userId) {
        return res.status(404).json({
          message: 'Sorry, you cant view this prescription',
        });
      }

      return res.status(200).json(prescription);
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message || 'Something went wrong',
    });
  }
};

const getAllPrescriptions = (req, res) => {
  const { userId } = req;
  try {
    Prescription.find({ userId }, (err, prescription) => {
      if (prescription.length === 0) {
        return res.status(404).json({
          message: 'no prescription found',
        });
      }

      return res.status(200).json({ message: `${prescription.length} prescriptions(s) found`,
        prescription });
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message || 'Something went wrong',
    });
  }
};

module.exports = { addPrescription,
  deletePrescription,
  verifyCompletion,
  getAllPrescriptions,
  getSpecificPrescription };
