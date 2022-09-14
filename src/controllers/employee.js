
const mysqlConnection  = require('../database/database.js');

const getEmployees =  (req, res) => {
  mysqlConnection.query('SELECT e.id, e.nombre, e.apellidos, e.sexo, e.fecha_nacimiento, e.id_departamento as empl_id_departamento, p.id_departamento as pos_id_departamento, p.id as pos_id, p.descripcion_posicion, d.id as dep_id, d.des_departamento, d.nom_departamento FROM empleados as e JOIN departamentos as d ON e.id_departamento = d.id JOIN posiciones as p ON e.id_posicion = p.id', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

const getEmployeesById = (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM empleados WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows[0]);
    } else {
      console.log(err);
      return res.status(500).json({
        error: err, 
        message: "Error interno del sistema."
      });
    }
  });
}

const deleteEmployee = (req, res) => {
  const { id } = req.params;
  console.log(id)
  const query = `
    SET @id = ?;
    CALL eliminarEmpleado(@id);
  `;
  mysqlConnection.query(query, [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Employee Deleted'});
    } else {
      console.log(err);
      return res.status(500).json({
        error: err, 
        message: "Error interno del sistema."
      });
    }
  });
}

const createEmployee = (req, res) => {
  const {nombre, apellidos, fechaNacimiento, sexo, idDepartamento, idPosicion} = req.body;
  console.log(nombre, apellidos, fechaNacimiento, sexo, idDepartamento, idPosicion);
  const query = `
    SET @name = ?;
    SET @apellidos = ?;
    SET @fechaNacimiento = ?;
    SET @sexo = ?;
    SET @idDepartamento = ?;
    SET @idPosicion = ?;
    CALL crearEmpleado(@name, @apellidos, @fechaNacimiento, @sexo, @idDepartamento, @idPosicion);
  `;
  mysqlConnection.query(query, [nombre, apellidos, fechaNacimiento, sexo, idDepartamento, idPosicion], (err, rows, fields) => {
    if(!err) {
      res.status(201).json({status: 'Employeed Saved'});
    } else {
      console.log(err);
      return res.status(500).json({
        error: err, 
        message: "Error interno del sistema."
      });
    }
  });
}

const updateEmployee = (req, res) => {
  const { nombre, apellidos, fechaNacimiento, sexo, idDepartamento, idPosicion } = req.body;
  const { id } = req.params;
  const query = `
  SET @id = ?;
  SET @name = ?;
  SET @apellidos = ?;
  SET @fechaNacimiento = ?;
  SET @sexo = ?;
  SET @idDepartamento = ?;
  SET @idPosicion = ?;
  CALL actualizarEmpleado(@id, @name, @apellidos, @fechaNacimiento, @sexo, @idDepartamento, @idPosicion);
  `;
  mysqlConnection.query(query, [id, nombre, apellidos, fechaNacimiento, sexo, idDepartamento, idPosicion], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Employee Updated'});
    } else {
      console.log(err);
      return res.status(500).json({
        error: err, 
        message: "Error interno del sistema."
      });
    }
  });
}

module.exports = {getEmployees, deleteEmployee, updateEmployee, createEmployee, getEmployeesById}