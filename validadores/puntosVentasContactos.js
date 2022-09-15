const { check } = require('express-validator')
const { validateResult } = require('../utilidades/handleValidador')
const validador = [
    check("puntosVentaId")
        .exists().withMessage("Puntos Venta Id es requerido")
        .notEmpty().withMessage("Puntos Venta Id no puede estar vacio"),
    check("nombres_apellidos")
        .exists().withMessage("Nombres Apellidos es requerido")
        .notEmpty().withMessage("Nombres Apellidos no puede estar vacio")
        .isString().withMessage("Nombres Apellidos debe ser una cadena de texto"),
    check("celular")
        .exists().withMessage("Celular es requerido")
        .notEmpty().withMessage("Celular no puede estar vacio")
        .matches(/^[0-9]{9}$/).withMessage("Celular debe ser un numero de 9 digitos"),
    check("correo")
        .exists().withMessage("Correo es requerido")
        .notEmpty().withMessage("Correo no puede estar vacio")
        .isEmail().withMessage("Correo debe ser un correo valido"),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]
module.exports = { validador }