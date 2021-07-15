const express = require("express");

const router = express.Router();

const usageFormula = require("./usageFormulaController");
const { verifyToken } = require('../../utils/validateToken');

const { addFormula, getUsageFormula, editFormula } = usageFormula;

router.post("/add/:prescription_id", verifyToken, addFormula);
router.get('/:_id', verifyToken, getUsageFormula);
router.put('/:_id', verifyToken, editFormula);

module.exports = router;
