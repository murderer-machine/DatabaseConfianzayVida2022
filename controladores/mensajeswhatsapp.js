
const { MensajesWhatsapp } = require('../modelos')
const { matchedData } = require('express-validator')
const { handleErrorResponse, handleHttpError } = require('../utilidades/handleError')
const leer = async (req, res) => {
    try {
        const response = await MensajesWhatsapp.findAll({
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
const actualizar = async (req, res) => {
    try {
        const { body } = req
        const response = await MensajesWhatsapp.findByPk(body.id)
        response.set(body)
        await response.save()
        res.send({ response: true, message: 'actualizado correctamente' })
    } catch (error) {
        handleErrorResponse(res, "error al actualizar item")
        return
    }
}

const eliminar = async (req, res) => {
    try {
        const response = await MensajesWhatsapp.findByPk(req.params.id)
        response.set({ eliminar: true })
        await response.save()
        res.send({ response: true, message: "eliminado correctamente" })
    } catch (error) {
        handleErrorResponse(res, "error al eliminar")
        return
    }
}
const insertar = async (req, res) => {
    try {
        // body = matchedData(req)
        const response = await MensajesWhatsapp.create(req.body)
        res.send({ response: true, message: "Insertado correctamente" })
    } catch (error) {
        // handleErrorResponse(res, "error al crear usuario")
        handleHttpError(res, error)
        return
    }
}
module.exports = { leer, actualizar, eliminar, insertar }