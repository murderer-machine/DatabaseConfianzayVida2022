const { check } = require('express-validator')
const { validateResult } = require('../utilidades/handleValidador')
const validadorRegistroUsuario = [
    check("nroDoc")
        .exists().withMessage(`nro de documento es requerido`)
        .notEmpty().withMessage("nro de documento no puede estar vacio")
        .isInt().withMessage("nro de documento debe contener numeros")
        .isLength({ min: 1, max: 10 }).withMessage("nro de documento debe tener entre 1 y 10 caracteres"),
    check("nombres")
        .exists().withMessage("nombres es requerido")
        .notEmpty().withMessage("nombres no puede estar vacio")
        .isString().withMessage("nombres debe contener solo letras"),
    check("apellidos")
        .exists().withMessage("apellidos es requerido")
        .notEmpty().withMessage("apellidos no puede estar vacio")
        .isString().withMessage("apellidos debe contener solo letras"),
    check("password")
        .exists().withMessage("contraseña es requerido")
        .notEmpty().withMessage("contraseña no puede estar vacio")
        .isString().withMessage("contraseña debe contener solo letras"),
    check("correo")
        .exists().withMessage("correo es requerido")
        .notEmpty().withMessage("correo no puede estar vacio")
        .isEmail().withMessage("formato incorrecto de correo"),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]
const validadorContrasena = [
    check("password")
        .exists().withMessage("contraseña es requerido")
        .notEmpty().withMessage("contraseña no puede estar vacio")
        .isString().withMessage("contraseña debe contener solo letras"),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]
const validadorEditarUsuario = [
    check("nroDoc")
        .exists().withMessage(`nro de documento es requerido`)
        .notEmpty().withMessage("nro de documento no puede estar vacio")
        .isInt().withMessage("nro de documento debe contener numeros")
        .isLength({ min: 1, max: 10 }).withMessage("nro de documento debe tener entre 1 y 10 caracteres"),
    check("nombres")
        .exists().withMessage("nombres es requerido")
        .notEmpty().withMessage("nombres no puede estar vacio")
        .isString().withMessage("nombres debe contener solo letras"),
    check("apellidos")
        .exists().withMessage("apellidos es requerido")
        .notEmpty().withMessage("apellidos no puede estar vacio")
        .isString().withMessage("apellidos debe contener solo letras"),
    check("correo")
        .exists().withMessage("correo es requerido")
        .notEmpty().withMessage("correo no puede estar vacio")
        .isEmail().withMessage("formato incorrecto de correo"),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]
module.exports = { validadorRegistroUsuario, validadorContrasena, validadorEditarUsuario }