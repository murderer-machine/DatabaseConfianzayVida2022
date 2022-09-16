
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntos_ventas_contactos`
--

DROP TABLE IF EXISTS `puntos_ventas_contactos`;
CREATE TABLE IF NOT EXISTS `puntos_ventas_contactos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `puntosVentaId` int(11) NOT NULL,
  `nombres_apellidos` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `celular` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `correo` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `puntos_ventas_contactos`
--

INSERT INTO `puntos_ventas_contactos` (`id`, `puntosVentaId`, `nombres_apellidos`, `celular`, `correo`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'sadasd', '959304050', 'carlosvaldivia@confianzayvida.com', '2022-09-16 16:52:17', '2022-09-16 16:52:17'),
(2, 1, 'sadasd', '959304050', 'carlosvaldivia@confianzayvida.com', '2022-09-16 16:52:22', '2022-09-16 16:52:22');
