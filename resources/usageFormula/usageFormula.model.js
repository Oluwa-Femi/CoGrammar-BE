const mongoose = require('mongoose');

const { Schema } = mongoose;
const UsageFormaulaSchema = Schema({
  frequency: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  number_of_times: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  dose: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  prescription_id: {
    type: String,
    required: true,
  },
  before_after_meal: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
});

const UsageFormulaModel = mongoose.model('UsageFormula', UsageFormaulaSchema);
module.exports = UsageFormulaModel;
