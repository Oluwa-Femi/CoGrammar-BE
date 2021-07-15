const helmet = require('helmet');
const morgan = require("morgan");
const express = require("express");
const cors = require("cors");

const expressMiddlewares = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan('combined'));
  app.use(helmet());
};

module.exports = expressMiddlewares;
