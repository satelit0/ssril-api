const express = require('express');
const router = express.Router();
const {getEmployees, deleteEmployee, updateEmployee,createEmployee, getEmployeesById} = require ('../controllers/employee.js')

// GET all Employees
router.get('/getemployee', getEmployees
);
// GET An Employee
router.get('/getemployeebyid/:id',getEmployeesById );
// DELETE An Employee
router.delete('/deleteemployeebyid/:id', deleteEmployee);
// INSERT An Employee
router.post('/createemployee', createEmployee);
//update an employee
router.put('/updateemployee/:id', updateEmployee);

module.exports = router;
