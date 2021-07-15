const Joi = require("joi");

module.exports = {
  validatePrescription(prescription) {
    const schema = {
      drug: Joi.string()
        .min(2)
        .max(50)
        .required(),
      start_Date: Joi
        .required(),
      end_Date: Joi
        .required(),
      completed: Joi.bool(),
      unit: Joi.string()
        .min(2)
        .max(50)
        .required(),
    };
    return Joi.validate(prescription, schema);
  },
};
