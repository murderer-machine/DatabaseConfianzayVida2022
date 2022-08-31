
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

module.exports = { leer, eliminar }