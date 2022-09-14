const express = require('express');
const router = express.Router();
const {getPositions, getPositionByIdDepartment} = require('../controllers/position');

router.get('/getpositions', getPositions);
router.get('/getpositionbyiddepartment/:id', getPositionByIdDepartment);



module.exports = router;