
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresas_seguros_productos`
--

DROP TABLE IF EXISTS `empresas_seguros_productos`;
CREATE TABLE IF NOT EXISTS `empresas_seguros_productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `empresasSeguroId` int(11) NOT NULL,
  `ramoId` int(11) NOT NULL,
  `comision` decimal(10,2) NOT NULL,
  `eliminar` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empresas_seguros_productos`
--

INSERT INTO `empresas_seguros_productos` (`id`, `nombre`, `empresasSeguroId`, `ramoId`, `comision`, `eliminar`, `createdAt`, `updatedAt`) VALUES
(1, 'seguro vehicular premiun', 2, 66, '200.00', 0, '2022-09-03 04:06:47', '2022-09-03 04:08:17'),
(2, 'soat marco', 2, 66, '250.00', 0, '2022-09-03 04:08:48', '2022-09-03 04:08:48'),
(3, '1223', 3, 52, '12321321.00', 0, '2022-09-06 15:55:55', '2022-09-06 17:26:39');
