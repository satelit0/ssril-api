

const {Router} =require('express');
const employee = require('./employees');
const departament = require('./departament');
const position = require('./position');


const router = Router();


router.use('/employee', employee);
router.use('/department', departament);
router.use('/position', position);


module.exports = router;