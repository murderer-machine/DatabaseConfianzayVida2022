
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresas_seguros`
--

DROP TABLE IF EXISTS `empresas_seguros`;
CREATE TABLE IF NOT EXISTS `empresas_seguros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `ruc` varchar(255) NOT NULL,
  `factorGeneral` decimal(10,4) NOT NULL,
  `factorSoat` decimal(10,4) NOT NULL,
  `gastosEmision` decimal(10,4) NOT NULL,
  `gastosEmisionMinimo` decimal(10,4) NOT NULL,
  `gastosEmisionMinimoSoat` decimal(10,4) NOT NULL,
  `activo` tinyint(1) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `eliminar` tinyint(1) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empresas_seguros`
--

INSERT INTO `empresas_seguros` (`id`, `nombre`, `ruc`, `factorGeneral`, `factorSoat`, `gastosEmision`, `gastosEmisionMinimo`, `gastosEmisionMinimoSoat`, `activo`, `logo`, `eliminar`, `createdAt`, `updatedAt`) VALUES
(1, 'rímac seguros y reaseguros', '20100041953', '1.2154', '1.2154', '1.0300', '5.0000', '0.0000', 1, '', 0, '2022-09-03 04:01:48', '2022-09-03 04:02:18'),
(2, 'rímac seguros y reaseguros', '20100041953', '12321.0000', '213.0000', '213.0000', '213.0000', '2321.0000', 1, '', 0, '2022-09-03 04:06:06', '2022-09-03 04:06:06'),
(3, 'positiva', '321321321321321', '123.0000', '213.0000', '23.0000', '213.0000', '213.0000', 1, '', 0, '2022-09-06 15:55:40', '2022-09-06 15:55:40');
