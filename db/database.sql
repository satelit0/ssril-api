USE `ssril`;
DROP procedure IF EXISTS `creaDepartamento`;

USE `ssril`;
DROP procedure IF EXISTS `ssril`.`creaDepartamento`;
;

DELIMITER $$
USE `ssril`$$
CREATE DEFINER=`root`@`%` PROCEDURE `creaDepartamento`(

in _des_departamento VARCHAR(60),
in _nom_departamento varchar(45) )
BEGIN
 begin 
	INSERT INTO `ssril`.`departamentos`
(
`des_departamento`,
`nom_departamento`
)
VALUES 
(
_des_departamento,
_nom_departamento);
 end;
END$$

DELIMITER ;
;

USE `ssril`;
DROP procedure IF EXISTS `actualizarEmpleado`;

USE `ssril`;
DROP procedure IF EXISTS `ssril`.`actualizarEmpleado`;
;

DELIMITER $$
USE `ssril`$$
CREATE DEFINER=`root`@`%` PROCEDURE `actualizarEmpleado`(
in _id int,
in _nombre varchar(30),
in _apellidos varchar(60),
in _fecha_nacimiento Datetime,
in _sexo char(1),
in _id_departamento int,
in _id_posicion int)
BEGIN
	begin 
	UPDATE `ssril`.`empleados` SET
nombre = _nombre,
apellidos = _apellidos,
fecha_nacimiento = _fecha_nacimiento,
sexo = _sexo,
id_departamento = _id_departamento,
id_posicion = _id_posicion
where id = _id;

	end;	
    
END$$

DELIMITER ;
;


USE `ssril`;
DROP procedure IF EXISTS `eliminarEmpleado`;

USE `ssril`;
DROP procedure IF EXISTS `ssril`.`eliminarEmpleado`;
;

DELIMITER $$
USE `ssril`$$
CREATE DEFINER=`root`@`%` PROCEDURE `eliminarEmpleado`(
in _id int
)
BEGIN
	begin
		delete from empleados where id = _id;
    end; 
END$$

DELIMITER ;
;

USE `ssril`;
DROP procedure IF EXISTS `crearPosiciones`;

USE `ssril`;
DROP procedure IF EXISTS `ssril`.`crearPosiciones`;
;

DELIMITER $$
USE `ssril`$$
CREATE DEFINER=`root`@`%` PROCEDURE `crearPosiciones`(
in _id_departamento int,
in _descripcion_posicion varchar(50))
BEGIN
begin
INSERT INTO `ssril`.`posiciones`
(
`id_departamento`,
`descripcion_posicion`)
VALUES
(
_id_departamento, 
_descripcion_posicion);

    end;
END$$

DELIMITER ;
;

USE `ssril`;
DROP procedure IF EXISTS `actualizarPosiciones`;

USE `ssril`;
DROP procedure IF EXISTS `ssril`.`actualizarPosiciones`;
;

DELIMITER $$
USE `ssril`$$
CREATE DEFINER=`root`@`%` PROCEDURE `actualizarPosiciones`(
in _id int,
in _id_departamento int,
in _descripcion_posicion varchar(50))
BEGIN
begin
UPDATE `ssril`.`posiciones` SET 
`id_departamento` = _id_departamento,
`descripcion_posicion` = _descripcion_posicion
where id = _id; 
    end;
END$$

DELIMITER ;
;

USE `ssril`;
DROP procedure IF EXISTS `eliminarPosione`;

USE `ssril`;
DROP procedure IF EXISTS `ssril`.`eliminarPosione`;
;

DELIMITER $$
USE `ssril`$$
CREATE DEFINER=`root`@`%` PROCEDURE `eliminarPosione`(
in _id int
)
BEGIN 
	begin
		delete from posiciones where id =_id;
    end;
END$$

DELIMITER ;
;


USE `ssril`;
DROP procedure IF EXISTS `creaDepartamento`;

USE `ssril`;
DROP procedure IF EXISTS `ssril`.`creaDepartamento`;
;

DELIMITER $$
USE `ssril`$$
CREATE DEFINER=`root`@`%` PROCEDURE `creaDepartamento`(

in _des_departamento VARCHAR(60),
in _nom_departamento varchar(45) )
BEGIN
 begin 
	INSERT INTO `ssril`.`departamentos`
(
`des_departamento`,
`nom_departamento`
) 
VALUES
(
_des_departamento,
_nom_departamento);
 end;
END$$

DELIMITER ;
;

USE `ssril`;
DROP procedure IF EXISTS `actualizarDepartamento`;

USE `ssril`;
DROP procedure IF EXISTS `ssril`.`actualizarDepartamento`;
;

DELIMITER $$
USE `ssril`$$
CREATE DEFINER=`root`@`%` PROCEDURE `actualizarDepartamento`(
in _id int,
in _des_departamento VARCHAR(60),
in _nom_departamento varchar(45) )
BEGIN
 begin 
	update `ssril`.`departamentos` set

`des_departamento` = _des_departamento,
`nom_departamento` = _nom_departamento

where id =_id; 
 end;
END$$

DELIMITER ;
;

USE `ssril`;
DROP procedure IF EXISTS `eliminarDepartamento`;

USE `ssril`;
DROP procedure IF EXISTS `ssril`.`eliminarDepartamento`;
;

DELIMITER $$
USE `ssril`$$
CREATE DEFINER=`root`@`%` PROCEDURE `eliminarDepartamento`(
in _id int
)
BEGIN
	begin
		delete from departamentos where id = _id;
    end; 
END$$

DELIMITER ;
;