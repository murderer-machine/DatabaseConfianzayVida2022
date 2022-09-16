
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes_contactos`
--

DROP TABLE IF EXISTS `clientes_contactos`;
CREATE TABLE IF NOT EXISTS `clientes_contactos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clienteId` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `celular` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes_contactos`
--

INSERT INTO `clientes_contactos` (`id`, `clienteId`, `nombre`, `telefono`, `celular`, `correo`) VALUES
(1, 1, 'willy urquizo', '', '958557444', 'cegull20_05@hotmail.com'),
(2, 2, 'willy jose urquizo llerena', '', '958557444', 'cegull20_05@hotmail.com'),
(3, 3, 'ruth juana mamani paricahua', '', '949170389', 'cvaldivia@servisegperu.com'),
(4, 4, 'jose cruz', '', '51958532088', 'fioreli17@hotmail.com'),
(5, 5, 'carlos galarza rozas', '', '920060489', 'carlosvaldivia@confianzayvida.com'),
(6, 6, 'kimberly supo santillan molissa', '', '51950630948', 'molissasac@hotmail.com'),
(7, 7, 'rene dianderas martinez', '', '953471745', 'carlosvaldivia@confianzayvida.com'),
(8, 8, 'cabrera vega fredy nicanor', '', '950656989', 'wildercabreravegs@gmail.com'),
(9, 9, 'auto leaders peru s.a.c', '', '959093561', 'carlosvaldivia@confianzayvida.com'),
(10, 10, 'hancco gonzales elisabeth', '', '996300742', 'hanccogonzales@gmail.com'),
(11, 11, 'flores cutipa felix', '', '959779088', 'pamelarodriguez@confianzayvida.com'),
(12, 12, 'villavicencio cayulla ronal', '', '951769674', 'pamelarodriguez@confianzayvida.com'),
(13, 13, 'transportes hernani s r ltda', '', '959663949', 'transportes.hernani@gmail.com'),
(14, 14, 'ruyyeri ramos mamani', '', '984445797', 'carlosvaldivia@confianzayvida.com'),
(15, 15, 'kampfer s.a.c', '', '942742692', 'katy.vch86@gmail.com'),
(16, 16, 'miguel angel rafael gomez yañez', '', '293095', 'famgomez@speedy.com.pe'),
(17, 17, 'ricardo yucra', '', '959572687', 'carlosvaldivia@confianzayvida.com'),
(18, 18, ' a & g contratistas y mineria s.a.c. ', '', '212905', 'cvaldivia@servisegperu.com'),
(19, 19, 'israel milkar', '', '955834843', 'ali72.milkar@hotmail.com'),
(20, 20, 'empresa de transportes san benedicto de abad s.a.c.', '', '966656455', 'carlosvaldivia@confianzayvida.com'),
(21, 21, 'vilca cayllahua william elimelec', '', '966500336', 'carlosvaldivia@confianzayvida.com'),
(22, 22, 'carmen benique', '', '995223354', 'carlosvaldivia@confianzayvida.com');
