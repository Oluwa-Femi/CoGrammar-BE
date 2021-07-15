const express = require('express');

const mainRouter = express.Router();

const users = require('./users/user.routes');
const prescription = require('./prescription/prescription.routes');
const usageFormula = require('./usageFormula/usageFormula.routes');
const notifier = require('./notification/notifications');

mainRouter.use('/api/v1/users', users);
mainRouter.use('/api/v1/prescription', prescription);
mainRouter.use('/api/v1/formula', usageFormula);
mainRouter.use('/api/v1/message', notifier);

module.exports = mainRouter;
