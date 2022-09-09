const { check } = require('express-validator')
const { validateResult } = require('../utilidades/handleValidador')

const validador = [
    check("nombres")
        .exists().withMessage("Nombres es requerido")
        .notEmpty().withMessage("Nombres no puede estar vacio")
        .isString().withMessage("Nombres debe ser una cadena de texto"),
    check("apellidos")
        .exists().withMessage("Apellidos es requerido")
        .notEmpty().withMessage("Apellidos no puede estar vacio")
        .isString().withMessage("Apellidos debe ser una cadena de texto"),
    check("abreviatura")
        .exists().withMessage("Abreviatura es requerido")
        .notEmpty().withMessage("Abreviatura no puede estar vacio")
        .isString().withMessage("Abreviatura debe ser una cadena de texto"),
    check("direccion")
        .exists().withMessage("Direccion es requerido")
        .notEmpty().withMessage("Direccion no puede estar vacio")
        .isString().withMessage("Direccion debe ser una cadena de texto"),
    check("referencia")
        .exists().withMessage("Referencia es requerido")
        .notEmpty().withMessage("Referencia no puede estar vacio")
        .isString().withMessage("Referencia debe ser una cadena de texto"),
    check("comision")
        .exists().withMessage("Comision es requerido")
        .notEmpty().withMessage("Comision no puede estar vacio")
        .isDecimal().withMessage("Comision debe ser un numero decimal")
        .matches(/^((?!0)\d{1,10}|0|\.\d{1,2})($|\.$|\.\d{1,2}$)/).withMessage("Comision debe ser un numero decimal , con 2 decimales"),
    check("fecha_activacion")
        .exists().withMessage("Nombre es requerido")
        .notEmpty().withMessage("Nombre no puede estar vacio")
        .isDate().withMessage("Nombre debe ser una fecha"),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]


module.exports = { validador }