
const EmpresasSeguros = require('../modelos/empresasSeguros')
const { matchedData } = require('express-validator')
const { handleErrorResponse } = require('../utilidades/handleError')

const leer = async (req, res) => {
    try {
        const response = await EmpresasSeguros.findAll()
        res.send({ response: true, message: response })
    } catch (error) {
        handleErrorResponse(res, "error al obtener items")
        return
    }
}
const actualizar = async (req, res) => {
    try {
        const { body } = req
        const response = await EmpresasSeguros.findByPk(body.id)
        response.set(body)
        await response.save()
        res.send({ response: true, message: 'actualizado correctamente' })


    } catch (error) {
        handleErrorResponse(res, "error al actualizar item")
        return
    }
}

module.exports = { leer, actualizar }