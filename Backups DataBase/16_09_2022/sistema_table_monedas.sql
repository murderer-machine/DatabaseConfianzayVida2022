
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `monedas`
--

DROP TABLE IF EXISTS `monedas`;
CREATE TABLE IF NOT EXISTS `monedas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `simbolo` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `eliminar` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `monedas`
--

INSERT INTO `monedas` (`id`, `descripcion`, `simbolo`, `eliminar`, `createdAt`, `updatedAt`) VALUES
(1, 'nuevos soles', 'S/ ', 0, '2022-09-03 07:03:41', '2022-09-03 07:03:41'),
(2, 'dólares americanos\r\n', '$', 0, '2022-09-03 07:03:41', '2022-09-03 07:03:41');
