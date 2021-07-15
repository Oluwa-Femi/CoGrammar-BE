const mongoose = require('mongoose');

const { Schema } = mongoose;
const PrescriptionSchema = Schema({
  drug: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  unit: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  start_Date: {
    type: String,
    required: true,
  },
  end_Date: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const PrescriptionModel = mongoose.model('Prescription', PrescriptionSchema);
module.exports = PrescriptionModel;
