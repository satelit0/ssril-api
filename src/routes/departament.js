const express = require('express');
const router = express.Router();
const {getDepartaments, createDepartament} = require ('../controllers/departament.js')


router.get('/getdepartment', getDepartaments);
router.post('/create', createDepartament);
router.put('/update', );
router.delete('/delete', );

module.exports = router;




