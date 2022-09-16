
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntos_ventas`
--

DROP TABLE IF EXISTS `puntos_ventas`;
CREATE TABLE IF NOT EXISTS `puntos_ventas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombres` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `apellidos` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `abreviatura` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `referencia` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `ubigeoId` int(11) NOT NULL,
  `comision` decimal(10,2) NOT NULL,
  `fecha_activacion` datetime NOT NULL,
  `usuarioId` int(11) NOT NULL,
  `observaciones` text COLLATE utf8_spanish_ci NOT NULL,
  `eliminar` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `puntos_ventas`
--

INSERT INTO `puntos_ventas` (`id`, `nombres`, `apellidos`, `abreviatura`, `direccion`, `referencia`, `ubigeoId`, `comision`, `fecha_activacion`, `usuarioId`, `observaciones`, `eliminar`, `createdAt`, `updatedAt`) VALUES
(1, 'dasdsadasdsa', '213213', '12321321', 'jr grau nro 536 ', '13213', 10503, '10.50', '2022-09-16 05:00:00', 0, '1232132132132', 0, '2022-09-16 16:52:12', '2022-09-16 16:52:12');
