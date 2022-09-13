
const { matchedData } = require('express-validator')
const { handleErrorResponse, handleHttpError } = require('../utilidades/handleError')
const { Ubigeos, PuntosVentas } = require('../modelos')
const leer = async (req, res) => {
    try {
        const response = await PuntosVentas.findAll({
            include: [{
                model: Ubigeos,
            }],
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
        const response = await PuntosVentas.findByPk(body.id)
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
        const response = await PuntosVentas.findByPk(req.params.id)
        response.set({ eliminar: true })
        await response.save()
        res.send({ response: true, message: "eliminado correctamente" })
    } catch (error) {
        handleErrorResponse(res, "error al eliminar")
        return
    }
}
const insertar = async (req, res) => {
    console.log(req.body)
    try {
        body = matchedData(req)
        console.log(body)
        const response = await PuntosVentas.create(body)
        res.send({ 
            response: true, 
            message: "Insertado correctamente",
            data: response.id
        })
    } catch (error) {
        handleErrorResponse(res, "error al crear usuario")
        return
    }
}
module.exports = { leer, actualizar, eliminar, insertar }