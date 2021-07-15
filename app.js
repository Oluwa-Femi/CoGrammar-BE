require('dotenv').config();
const express = require('express');
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const connectDB = require('./database');
const resources = require('./resources');
const expressMiddlewares = require('./utils/middlewares');

const app = express();

const swaggerDocument = YAML.load(`${__dirname}/./swagger.yaml`);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


expressMiddlewares(app);

app.use(resources);

connectDB();

app.get('/', (req, res, next) => {
  try {
    res.status(200).json({
      message: 'welcome to drug_prescription_app',
    });
  } catch (error) {
    next(new Error(error));
  }
});

module.exports = app;
