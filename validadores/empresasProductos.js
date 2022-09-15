const { check } = require('express-validator')
const { validateResult } = require('../utilidades/handleValidador')
const validadorActualizar = [
    check("nombre")
        .exists().withMessage("Nombre es requerido")
        .notEmpty().withMessage("Nombre no puede estar vacio")
        .isString().withMessage("Nombre debe ser una cadena de texto"),
    check("empresasSeguroId")
        .exists().withMessage("Compañia es requerido")
        .notEmpty().withMessage("Compañia no puede estar vacio"),
    check("ramoId")
        .exists().withMessage("Ramo es requerido")
        .notEmpty().withMessage("Ramo no puede estar vacio"),
    check("comision")
        .exists().withMessage("Comision es requerido")
        .notEmpty().withMessage("Comision no puede estar vacio")
        .isDecimal().withMessage("Comision debe ser un numero decimal")
        .matches(/^((?!0)\d{1,10}|0|\.\d{1,2})($|\.$|\.\d{1,2}$)/).withMessage("Comision debe ser un numero decimal , con 2 decimales"),
    (req, res, next) => {
        validateResult(req, res, next)
    }]
module.exports = { validadorActualizar }