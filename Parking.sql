DROP DATABASE Parking;
CREATE DATABASE Parking;
USE Parking;



CREATE TABLE `usuario` (
  `id_usuario` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `cuenta` varchar(11),
  `nombre` varchar(100),
  `correo` varchar(50),
  `telefono` varchar(15),
  `fecha_nacimiento` date,
  `fecha_registro` date,
  `id_tipo_usuario` integer
);

CREATE TABLE `tipo_usuario` (
  `id_tipo_usuario` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `tipo_usuario` varchar(50)
);

CREATE TABLE `cajon` (
  `id_cajon` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `clave` varchar(20),
  `estado` integer
);

CREATE TABLE `usuario_cajon` (
  `id_usuario_cajon` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_cajon` integer,
  `id_usuario` integer
);

CREATE TABLE `comunidad_unam` (
  `id_comunidad_unam` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `cuenta` varchar(11),
  `nombre` varchar(100),
  `correo` varchar(50),
  `telefono` varchar(15),
  `carrera` varchar(50),
  `id_carrera` varchar(10),
  `id_carrera_CU` varchar(10),
  `tipo_sistema` varchar(20),
  `generacion` integer(15),
  `fecha_ingreso` datetime
);

CREATE TABLE `usuario_queja` (
  `id_usuario_queja` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_queja` integer,
  `id_usuario` integer
);

CREATE TABLE `queja` (
  `id_queja` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `queja` varchar(100),
  `fecha_registro` datetime
);

ALTER TABLE `usuario` ADD FOREIGN KEY (`id_tipo_usuario`) REFERENCES `tipo_usuario` (`id_tipo_usuario`);

ALTER TABLE `usuario_cajon` ADD FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

ALTER TABLE `usuario_cajon` ADD FOREIGN KEY (`id_cajon`) REFERENCES `cajon` (`id_cajon`);

ALTER TABLE `usuario_queja` ADD FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

ALTER TABLE `usuario_queja` ADD FOREIGN KEY (`id_queja`) REFERENCES `queja` (`id_queja`);
