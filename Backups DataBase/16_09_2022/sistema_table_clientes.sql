
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

DROP TABLE IF EXISTS `clientes`;
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `idTipoDoc` int(11) NOT NULL,
  `nroDoc` varchar(11) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `idGiroNegocio` int(11) NOT NULL,
  `direccion` text CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `referencia` text CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `ubigeoId` int(11) NOT NULL,
  `idSubagente` int(11) NOT NULL,
  `eliminar` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `idTipoDoc`, `nroDoc`, `idGiroNegocio`, `direccion`, `referencia`, `ubigeoId`, `idSubagente`, `eliminar`, `createdAt`, `updatedAt`) VALUES
(1, 'transtours majeños s.a.c.', 4, '20604856222', 0, 'huascar nro 107 nivel b zona cerro colorado', '', 40104, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10'),
(2, 'willy jose urquizo llerena', 4, '10305893566', 0, 'amauta mz c lote 3 j. luis bustamante y rivero', '', 40129, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10'),
(3, 'ruth juana mamani paricahua', 2, '29677318', 0, 'siglo xx nro 230 urb san jose juliaca', '', 211101, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10'),
(4, 'empresa rental cruz hermanos sac', 4, '20559191354', 0, 'juan velasco alvarado mz i lote 7 cayma', '', 40103, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10'),
(5, 'carlos galarza rozas', 2, '40294936', 0, 'los arces nro 319 arequipa', '', 40103, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10'),
(6, 'empresa de transportes molissa sac', 4, '20539628314', 0, 'moquegua nro 869 ilo', '', 180301, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10'),
(7, 'rene dianderas martinez', 2, '43654965', 0, 'portales e chiguata nro s/n chiguata', '', 40106, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10'),
(8, 'cabrera vega fredy nicanor', 4, '10442052242', 0, '2b alto trujillo mz o lote 12 el porvenir', '', 40110, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10'),
(9, 'auto leaders peru s.a.c', 4, '20456270558', 0, 'ruiseñores nro 216 urb el carmen arequipa', '', 40101, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10'),
(10, 'hancco gonzales elisabeth', 4, '10460947397', 0, 'arequipa nro s/n zona bar. progreso pallpata', '', 80805, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10'),
(11, 'flores cutipa felix', 4, '10426241124', 0, 'coronel gamarra nro 105 zona ciudad nueva arequipa', '', 40128, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10'),
(12, 'villavicencio cayulla ronal', 4, '10421929365', 0, 'porongoche nro 500 lote m64 urb corazon de maria paucarpata', '', 40112, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10'),
(13, 'transportes hernani s r ltda', 4, '20223602216', 0, 'progreso 210 huaranguillo', '', 40117, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10'),
(14, 'ruyyeri ramos mamani', 2, '71047336', 0, 'campesina de corire nro sn moquegua', '', 180101, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10'),
(15, 'kampfer s.a.c', 4, '20600121503', 0, 'mz b lote 24 urb campiña dorada arequipa', '', 40101, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10'),
(16, 'miguel angel rafael gomez yañez', 2, '29273382', 0, 'los portales i-10. cayma', '', 40103, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10'),
(17, 'esmeralda hy s.a.c', 4, '20602583636', 0, 'jose galvez 106 mz 41 lote 1 pblo.joven independencia zn.a alto selva alegre', '', 40102, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10'),
(18, ' a & g contratistas y mineria s.a.c. ', 4, '20558732831', 0, 'juan p vizcardo y guzman 520 urb 4 de socabaya', '', 40122, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10'),
(19, 'empresa de transportes y turismo milkar s.r.l', 4, '20532742006', 0, 'matara nro 443 zona cercado de ilo moquegua', '', 180301, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10'),
(20, 'empresa de transportes san benedicto de abad s.a.c.', 4, '20449363214', 0, 'ot asoc jose a quinones mz d lte 8 8', '', 230102, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10'),
(21, 'william elimelec vilca cayllahua', 4, '10469137789', 0, 'mz a lt 12 zona a villa cristo', '', 211101, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10'),
(22, 'empresa de transportes y de servicios pegaso imperial sociedad comercial de responsabilidad limitada', 4, '20600801636', 0, 'i6021 otros tipos transporte regular de pasajeros por via terrestre', '', 211101, 52, 0, '2022-07-06 17:38:10', '2022-07-06 17:38:10');
