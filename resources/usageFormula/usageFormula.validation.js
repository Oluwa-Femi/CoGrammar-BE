const Joi = require("joi");

module.exports = {
  validateUsageFormula(usageFormula) {
    const schema = {
      frequency: Joi.string()
        .min(2)
        .max(50)
        .required(),
      number_of_times: Joi.number()
        .required(),
      dose: Joi.string()
        .required(),
      duration: Joi.string()
        .min(1)
        .max(100)
        .required(),
      before_after_meal: Joi.string()
        .min(2)
        .max(50)
        .required(),
    };
    return Joi.validate(usageFormula, schema);
  },
};
