const Usuarios = require("../modelos/usuarios")
const { handleHttpError, handleErrorResponse } = require("../utilidades/handleError")
const { matchedData } = require('express-validator')
const { encriptar } = require("../utilidades/handlePassword")
const { tokenSign, generarToken } = require("../utilidades/handleToken")
const { Op } = require("sequelize")
const create = async (req, res) => {
    try {
        body = matchedData(req)
        const ckeckDNI = await Usuarios.findOne({ where: { nroDoc: body.nroDoc } })
        if (ckeckDNI) {
            handleErrorResponse(res, `el usuario ya existe con ese numero de DNI ${body.nroDoc}`, 409)
            return
        }
        const password = await encriptar(body.password)
        const bodyInsert = { ...body, password }
        const response = await Usuarios.create(bodyInsert)
        res.send({ response: true })
    } catch (error) {
        handleErrorResponse(res, "error al crear usuario")
        return
    }
}
const getitems = async (req, res) => {
    try {
        const response = await Usuarios.findAll({
            attributes: ['id', 'nroDoc', 'nombres', 'apellidos', 'correo', 'rol'],
            order: [['id', 'DESC']],
            where: { eliminar: 0 }
        })
        res.send(response)
    } catch (error) {
        handleErrorResponse(res, "error al obtener items")
        return
    }
}
const update = async (req, res) => {
    try {
        const response = await Usuarios.findByPk(req.params.id)
        console.log(req.body)
        response.set(req.body)
        await response.save()
        res.send({ response: true, message: "se modifico correctamente" })
    } catch (error) {
        handleErrorResponse(res, "error al modificar usuario")
    }
}
const eliminar = async (req, res) => {
    try {
        const response = await Usuarios.findByPk(req.params.id)
        response.set({ eliminar: true })
        await response.save()
        res.send({ response: true })
    } catch (error) {
        handleErrorResponse(res, "error al eliminar")
        return
    }
}
const cambiarContrasena = async (req, res) => {
    try {
        const response = await Usuarios.findByPk(req.params.id)
        const password = await encriptar(req.body.password)
        response.set({ password })
        await response.save()
        res.send({ response: true, message: "contraseña cambiada" })
    } catch (error) {
        handleErrorResponse(res, "error al cambiar contraseña")
        return
    }
}
const login = async (req, res) => {
    const { body } = req
    const usuario = await Usuarios.findOne({ where: { nombres: body.nombres } })
    if (!usuario) {
        handleErrorResponse(res, "el usuario no existe", 404)
        return
    }
    const tokenJwt = await generarToken(usuario)
    const data = {
        token: tokenJwt,
        uusuario: usuario
    }
    res.send({ data })
}
const generarUsuarios = async (req, res) => {
    for (let i = 0; i < req.params.valor; i++) {
        const body = {
            nroDoc: `${i + 1}`,
            nombres: `nombre${i + 1}`,
            apellidos: `apellido${i + 1}`,
            correo: ` correo${i + 1}`,
            password: `password${i + 1}`,
            rol: "admin"
        }
        const response = await Usuarios.create(body)
    }
    res.send('ok')
}
const pruebas = async (req, res) => {
    const pageAsNumber = Number.parseInt(req.params.paginas)
    const sizeAsNumber = Number.parseInt(req.params.tamano)
    let page = !Number.isNaN(pageAsNumber) && pageAsNumber > 0 ? pageAsNumber - 1 : 0
    let size = !Number.isNaN(sizeAsNumber) && sizeAsNumber < 10 ? sizeAsNumber : 10
    const response = await Usuarios.findAndCountAll({
        limit: size,
        offset: page * size,
    })
    response['totalPaginas'] = Math.ceil(response.count / size)
    res.send(response)
}
module.exports = { create, update, getitems, eliminar, login, cambiarContrasena, generarUsuarios, pruebas }



