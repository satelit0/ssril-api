
const mysqlConnection  = require('../database/database.js');

const getPositions =  (req, res) => {
  mysqlConnection.query('SELECT * FROM posiciones', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

const getPositionById = (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM posiciones WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows[0]);
    } else {
      console.log(err);
    }
  });
}
const getPositionByIdDepartment = (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM posiciones WHERE id_departamento = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err);
    }
  });
}

const deletePosition = (req, res) => {
  const { id } = req.params;
  const query = `
    SET @id = ?;
    CALL eliminarPosicione(@id);
  `;
  mysqlConnection.query(query, [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Position Deleted'});
    } else {
      console.log(err);
    }
  });
}

const createPosition = (req, res) => {
  const {nombre, apellidos, fechaNacimiento, sexo, idDepartamento} = req.body;
  console.log(nombre, apellidos, fechaNacimiento, sexo, idDepartamento);
  const query = `
  SET @id_departamento = ?;
  SET @descripcion_posicion = ?;
    CALL crearPosicione(@id_departamento, @descripcion_posicion);
  `;
  mysqlConnection.query(query, [id_departamento, descripcion_posicion], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Positiond Saved'});
    } else {
      console.log(err);
    }
  });
}

const updatePosition = (req, res) => {
  const { descripcion_posicion, id_departamento } = req.body;
  const { id } = req.params;
  const query = `
  SET @id = ?;
  SET @id_departamento = ?;
  SET @descripcion_posicion = ?;
  CALL actualizarPosicione(@id, @id_departamento, @descripcion_posicion);
  `;
  mysqlConnection.query(query, [id, id_departamento, descripcion_posicion], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Position Updated'});
    } else {
      console.log(err);
    }
  });
}

module.exports = {getPositions, deletePosition, updatePosition, createPosition, getPositionById, getPositionByIdDepartment}