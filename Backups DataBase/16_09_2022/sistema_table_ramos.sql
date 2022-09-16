
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ramos`
--

DROP TABLE IF EXISTS `ramos`;
CREATE TABLE IF NOT EXISTS `ramos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ramos`
--

INSERT INTO `ramos` (`id`, `descripcion`) VALUES
(1, 'incendio'),
(2, 'líneas aliadas incendio'),
(3, 'terremoto'),
(4, 'lucro cesante'),
(5, 'cristales'),
(11, 'transportes'),
(15, 'marítimo - cascos'),
(18, 'aviación'),
(21, 'vehículos'),
(22, 'líneas aliadas de vehículos'),
(31, 'todo riesgo para contratistas (car)'),
(33, 'rotura de maquinaria (rm)'),
(34, 'lucro cesante rotura de maquinaria'),
(35, 'montaje contra todo riesgo (ear)'),
(36, 'todo riesgo equipo electrónico (ee)'),
(37, 'todo riesgo equipo de contratistas'),
(38, 'calderos'),
(41, 'robo y asalto'),
(44, 'deshonestidad frente a la empresa'),
(45, 'comprensivo contra deshonestidad (3d)'),
(46, 'seguro de bancos (b.b.b.)'),
(51, 'animales'),
(52, 'domiciliario'),
(53, 'responsabilidad civil'),
(54, 'cauciones'),
(55, 'crédito interno'),
(56, 'crédito a la exportación'),
(57, 'multiseguros'),
(58, 'agrícola'),
(59, 'misceláneos'),
(61, 'accidentes personales'),
(62, 'accidentes de trabajo'),
(63, 'escolares'),
(64, 'asistencia médica'),
(65, 'sepelio (dado de baja)'),
(66, 'soat'),
(71, 'vida individual de largo plazo'),
(72, 'vida grupo particular'),
(73, 'vida ley trabajadores'),
(74, 'desgravamen'),
(75, 'renta particular'),
(76, 'renta de jubilación'),
(77, 'seguro complementario de trabajo de riesgo'),
(78, 'pensiones del seguro complementario de trabajo de riesgo'),
(79, 'sepelio de largo plazo'),
(80, 'vida individual de corto plazo'),
(81, 'sepelio de corto plazo'),
(82, 'vida ley ex-trabajadores'),
(91, 'invalidez'),
(92, 'sobrevivencia'),
(93, 'gastos de sepelio'),
(94, 'pensiones de invalidez'),
(95, 'pensiones de sobrevivencia'),
(96, 'pensiones de invalidez - regimen temporal'),
(97, 'pensiones de sobrevivencia - regimen temporal');
