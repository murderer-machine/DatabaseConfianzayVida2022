
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresas_bancarias`
--

DROP TABLE IF EXISTS `empresas_bancarias`;
CREATE TABLE IF NOT EXISTS `empresas_bancarias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `eliminar` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empresas_bancarias`
--

INSERT INTO `empresas_bancarias` (`id`, `nombre`, `eliminar`, `createdAt`, `updatedAt`) VALUES
(1, 'mibanco', 0, '2022-09-08 21:08:14', '2022-09-08 21:08:14'),
(2, 'banco de credito', 0, '2022-09-08 21:08:14', '2022-09-08 21:08:14'),
(3, 'scotiabank peru', 0, '2022-09-08 21:08:14', '2022-09-08 21:08:14'),
(4, 'bbva', 0, '2022-09-08 21:08:14', '2022-09-08 21:08:14'),
(5, 'banco de comercio', 0, '2022-09-08 21:08:14', '2022-09-08 21:08:14'),
(6, 'citibank del peru', 0, '2022-09-08 21:08:14', '2022-09-08 21:08:14'),
(7, 'banbif', 0, '2022-09-08 21:08:14', '2022-09-08 21:08:14'),
(8, 'nacion', 0, '2022-09-08 21:08:14', '2022-09-08 21:08:14'),
(9, 'banco pichincha', 0, '2022-09-08 21:08:14', '2022-09-08 21:08:14'),
(10, 'cofide', 0, '2022-09-08 21:08:14', '2022-09-08 21:08:14'),
(11, 'interbank', 0, '2022-09-08 21:08:14', '2022-09-08 21:08:14'),
(12, 'banco ripley', 0, '2022-09-08 21:08:14', '2022-09-08 21:08:14'),
(13, 'banco central peru', 0, '2022-09-08 21:08:14', '2022-09-08 21:08:14'),
(14, 'banco falabella', 0, '2022-09-08 21:08:14', '2022-09-08 21:08:14'),
(15, 'agrobanco', 0, '2022-09-08 21:08:14', '2022-09-08 21:08:14'),
(16, 'banco gnb', 0, '2022-09-08 21:08:14', '2022-09-08 21:08:14'),
(17, 'santander peru', 0, '2022-09-08 21:08:14', '2022-09-08 21:08:14'),
(18, 'banco azteca', 0, '2022-09-08 21:08:14', '2022-09-08 21:08:14'),
(19, 'icbc bank', 0, '2022-09-08 21:08:14', '2022-09-08 21:08:14'),
(20, 'bank of china (peru)', 0, '2022-09-08 21:08:14', '2022-09-08 21:08:14'),
(21, 'maquisistemas', 0, '2022-09-08 21:08:14', '2022-09-08 21:08:14');
