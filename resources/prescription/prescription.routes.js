const express = require("express");

const router = express.Router();

const prescriptionController = require("./prescriptionController");
const { verifyToken } = require('../../utils/validateToken');

const { addPrescription, deletePrescription,
  verifyCompletion, getAllPrescriptions,
  getSpecificPrescription } = prescriptionController;

router.post("/add", verifyToken, addPrescription);
router.delete('/:_id', verifyToken, deletePrescription);
router.put('/:_id', verifyToken, verifyCompletion);
router.get('/find/:_id', verifyToken, getSpecificPrescription);
router.get('/', verifyToken, getAllPrescriptions);


module.exports = router;
