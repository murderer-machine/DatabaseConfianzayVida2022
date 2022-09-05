
const EmpresasSegurosProductos = require('../modelos/empresasSegurosProductos')
const EmpresasSeguros = require('../modelos/empresasSeguros')
const Ramos = require('../modelos/ramos')
const { Op } = require("sequelize")
const { matchedData } = require('express-validator')
const { handleErrorResponse } = require('../utilidades/handleError')

const leer = async (req, res) => {
    try {
        const response = await EmpresasSegurosProductos.findAll({
            include: [
                { model: EmpresasSeguros },
                { model: Ramos }
            ],
            // where:{
            //     comision: {
            //         [Op.gt]: 0
            //     }
            // }
            where: {
                eliminar: false
            },
            order: [['id', 'DESC']]
        })
        res.send({ response: true, message: response })
    } catch (error) {
        handleErrorResponse(res, "error al obtener items")
        return
    }
}
const eliminar = async (req, res) => {
    try {
        const response = await EmpresasSegurosProductos.findByPk(req.params.id)
        response.set({ eliminar: true })
        await response.save()
        res.send({ response: true, message: "eliminado correctamente" })
    } catch (error) {
        handleErrorResponse(res, "error al eliminar")
        return
    }
}
const actualizar = async (req, res) => {
    try {
        const { body } = req

        const response = await EmpresasSegurosProductos.findByPk(body.id)
        response.set(body)
        await response.save()
        res.send({ response: true, message: 'actualizado correctamente' })
    } catch (error) {
        handleErrorResponse(res, "error al actualizar item")
        return
    }
}
const insertar = async (req, res) => {
    try {
        body = matchedData(req)
        const response = await EmpresasSegurosProductos.create(body)
        res.send({ response: true, message: "Insertado correctamente" })
    } catch (error) {
        handleErrorResponse(res, "error al crear usuario")
        return
    }
}
module.exports = { leer, eliminar, actualizar, insertar }