
const mysqlConnection  = require('../database/database.js');

const getDepartaments =  (req, res) => {
 return mysqlConnection.query('SELECT * FROM departamentos', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

const deleteDepartament = (req, res) => {
  const { id } = req.params;
  const query = `
    SET @id = ?;
    CALL eliminarDepartamento(@id);
  `;
  mysqlConnection.query(query, [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Employee Deleted'});
    } else {
      console.log(err);
    }
  });
}

const createDepartament = (req, res) => {
  const {nom_departamento, des_departamento} = req.body;
  const query = `
    SET @des_departamento = ?;
    SET @nom_departamento = ?;
    CALL creaDepartamento(@des_departamento, @nom_departamento);
  `;
  mysqlConnection.query(query, [des_departamento, nom_departamento], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Departament Saved'});
    } else {
      console.log(err);
    }
  });
}

const updateDepartament = (req, res) => {
  const { nomDepartamento, desDepartamento} = req.body;
  const { id } = req.params;
  const query = `
  SET @id = ?;
  SET @des_departamento = ?;
  SET @nom_departamento = ?;
  CALL actualizarDepartamento(@id, @des_departamento, @nom_departamento);
  `;
  mysqlConnection.query(query, [id, desDepartamento, nomDepartamento], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Departament Updated'});
    } else {
      console.log(err);
    }
  });
}



module.exports = { getDepartaments, deleteDepartament, createDepartament, updateDepartament }