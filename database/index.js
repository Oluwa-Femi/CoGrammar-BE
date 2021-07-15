/* eslint-disable no-console */
const mongoose = require("mongoose");

const { connectionUrl } = require("../config/dbConfig");

// this line fixes this warning:
// (node: 18804) DeprecationWarning: collection.ensureIndex is deprecated.Use createIndexes instead.
// it can also be silenced by using the node flag --no-deprecation
mongoose.set('useCreateIndex', true);

module.exports = async () => {
  try {
    await mongoose.connect(connectionUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'drug_prescription_app'
    });
    console.log("Connected to Database");
  } catch (e) {
    console.log(`Connection to database failed: ${e.message}`);
  }
};
