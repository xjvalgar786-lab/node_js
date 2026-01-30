
CREATE DATABASE IF NOT EXISTS construccion;
USE construccion;


CREATE TABLE `empresa_constructora` (
  `id` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `activa` tinyint(1) NOT NULL DEFAULT 1,
  `fecha_fundacion` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `empresa_constructora` (`id`, `nombre`, `direccion`, `telefono`, `activa`, `fecha_fundacion`) VALUES
(1, 'Constructora Andina', 'Av. Siempre Viva 742', '123456789', 1, '2001-05-10'),
(2, 'Grupo Edifica', 'Calle Central 123', '987654321', 1, '1998-03-15'),
(3, 'Obras y Proyectos S.A.', 'Av. Libertad 456', '555123456', 0, '2010-08-20');



CREATE TABLE `obra` (
  `id` int NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `descripcion` text,
  `presupuesto` float NOT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `finalizada` tinyint(1) NOT NULL DEFAULT 0,
  `empresaId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



INSERT INTO `obra` (`id`, `nombre`, `descripcion`, `presupuesto`, `fecha_inicio`, `finalizada`, `empresaId`) VALUES
(1, 'Puente Central', 'Puente vehicular sobre el río principal.', 2500000.50, '2024-01-15', 0, 1),
(2, 'Edificio Torres', 'Conjunto de edificios residenciales de lujo.', 5000000.00, '2023-06-01', 0, 2),
(3, 'Autopista Norte', 'Ampliación de la autopista principal de la ciudad.', 7500000.75, '2022-09-10', 1, 1),
(4, 'Centro Comercial Plaza', 'Construcción de un centro comercial moderno.', 3000000.00, '2024-03-20', 0, 3);


ALTER TABLE `empresa_constructora`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `obra`
  ADD PRIMARY KEY (`id`),
  ADD KEY `empresaId` (`empresaId`);



ALTER TABLE `empresa_constructora`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `obra`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;



ALTER TABLE `obra`
  ADD CONSTRAINT `obra_ibfk_1` FOREIGN KEY (`empresaId`) REFERENCES `empresa_constructora` (`id`);

COMMIT;

