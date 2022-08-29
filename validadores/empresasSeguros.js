const { check } = require('express-validator')
const { validateResult } = require('../utilidades/handleValidador')

const validadorActualizar = [
    check("nombre")
        .exists().withMessage("Nombre es requerido")
        .notEmpty().withMessage("Nombre no puede estar vacio")
        .isString().withMessage("Nombre debe ser una cadena de texto"),
    check("ruc")
        .exists().withMessage("Ruc es requerido")
        .notEmpty().withMessage("Ruc no puede estar vacio"),
    check("factorGeneral")
        .exists().withMessage("Factor General es requerido")
        .notEmpty().withMessage("Factor General no puede estar vacio")
        .isDecimal().withMessage("Factor General debe ser un numero decimal"),
    check("factorSoat")
        .exists().withMessage("Factor Soat es requerido")
        .notEmpty().withMessage("Factor Soat no puede estar vacio")
        .isDecimal().withMessage("Factor Soat debe ser un numero decimal"),
    check("gastosEmision")
        .exists().withMessage("Gastos Emision es requerido")
        .notEmpty().withMessage("Gastos Emision no puede estar vacio")
        .isDecimal().withMessage("Gastos Emision debe ser un numero decimal"),
    check("gastosEmisionMinimo")
        .exists().withMessage("Gastos Emision Minimo es requerido")
        .notEmpty().withMessage("Gastos Emision Minimo no puede estar vacio")
        .isDecimal().withMessage("Gastos Emision Minimo debe ser un numero decimal"),
    check("gastosEmisionMinimoSoat")
        .exists().withMessage("Gastos Emision Minimo Soat es requerido")
        .notEmpty().withMessage("Gastos Emision Minimo Soat no puede estar vacio")
        .isDecimal().withMessage("Gastos Emision Minimo Soat debe ser un numero decimal"),
    check("activo")
        .exists().withMessage("Estado es requerido"),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]


module.exports = { validadorActualizar }