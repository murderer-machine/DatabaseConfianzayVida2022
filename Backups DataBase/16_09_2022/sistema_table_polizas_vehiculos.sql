
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `polizas_vehiculos`
--

DROP TABLE IF EXISTS `polizas_vehiculos`;
CREATE TABLE IF NOT EXISTS `polizas_vehiculos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `polizaId` int(11) NOT NULL,
  `placa` varchar(255) NOT NULL,
  `clase` int(11) NOT NULL,
  `uso` int(11) NOT NULL,
  `categoria` int(11) NOT NULL,
  `marca` int(11) NOT NULL,
  `modelo` int(11) NOT NULL,
  `ano` int(11) NOT NULL,
  `nro_asientos` int(11) NOT NULL,
  `nro_pasajeros` int(11) NOT NULL,
  `nro_serie` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `polizas_vehiculos`
--

INSERT INTO `polizas_vehiculos` (`id`, `polizaId`, `placa`, `clase`, `uso`, `categoria`, `marca`, `modelo`, `ano`, `nro_asientos`, `nro_pasajeros`, `nro_serie`) VALUES
(1, 1, 'vdy956', 26, 19, 7, 117, 2933, 2018, 16, 0, 'm9tc678c029981'),
(2, 2, 'vcc962', 26, 19, 7, 117, 2933, 2016, 16, 0, 'm9ta876c032837'),
(3, 3, 'vbq961', 26, 19, 7, 117, 2933, 2016, 16, 0, 'm9ta876c032447'),
(4, 4, 'vdm956', 26, 19, 7, 88, 2937, 2018, 16, 0, '8ac906657je152950'),
(5, 5, 'vfd967', 26, 19, 7, 117, 2933, 2020, 16, 0, 'm9tc678c030979'),
(6, 6, 'v0k412', 26, 19, 7, 117, 2933, 2020, 16, 0, 'm9tc678c031187'),
(7, 7, 'v0n659', 30, 19, 7, 248, 2929, 2020, 16, 0, 'j05eua20744'),
(8, 8, 'v9x748', 9, 4, 6, 140, 1285, 2018, 5, 0, '1gd4400562'),
(9, 9, 'azb713', 3, 3, 9, 242, 3230, 2017, 3, 0, '80224728'),
(10, 11, 'vbc782', 9, 1, 6, 140, 1285, 2021, 5, 0, '1gdg258417'),
(11, 12, 'vai949', 9, 1, 6, 140, 1285, 2020, 5, 0, '1gdg187729'),
(12, 14, 'e/t', 1, 9, 6, 58, 2918, 2021, 5, 0, 'g3lamm334374'),
(13, 15, 'e/t', 26, 19, 7, 251, 3024, 2019, 32, 0, '4m50e29780'),
(14, 16, 'v3o586', 1, 9, 6, 99, 1462, 2012, 5, 0, 'hr16233773c'),
(15, 17, 'v3p671', 1, 9, 6, 99, 689, 2012, 5, 0, 'ga16877006y'),
(16, 18, 'xbr964', 30, 19, 7, 251, 2934, 2018, 28, 0, 'jlbfe8bdhjku20558'),
(17, 19, 'buk166', 30, 19, 7, 88, 3231, 2019, 28, 0, '924999u1277173'),
(18, 20, 'e/t', 30, 19, 7, 148, 3038, 2021, 28, 0, 'y1a053530'),
(19, 21, 'vev959', 26, 19, 7, 58, 3036, 2019, 32, 0, 'kmjwa37haku048128'),
(20, 22, 'vev965', 30, 19, 7, 251, 3070, 2018, 32, 0, 'jlbbe63djjrk30588'),
(21, 23, 'zdr964', 26, 19, 7, 58, 3029, 2020, 32, 0, 'kmjaa27rplk019520'),
(22, 24, 'zdv963', 27, 19, 7, 255, 2946, 2020, 32, 0, 'ldt18dcg8lg102019'),
(23, 25, 'zdv963', 27, 19, 7, 255, 2946, 2020, 16, 0, 'ldt18dcg8lg102019'),
(24, 26, 'v9n813', 13, 4, 9, 140, 1285, 2017, 4, 0, '8ajkb8cd9h1671722'),
(25, 27, 'v9o910', 13, 4, 9, 140, 1285, 2017, 4, 0, '8ajka8cd4h3170244'),
(26, 28, 'ayv848', 13, 1, 9, 140, 1285, 2018, 4, 0, '8ajkb8cd3j1675612'),
(27, 29, 'vao926', 11, 1, 6, 85, 1414, 2021, 3, 0, 'mm7ur4df6mw111608'),
(28, 30, 'vex958', 26, 19, 7, 95, 3222, 2018, 16, 0, 'jlbbe63djjrk30507');
