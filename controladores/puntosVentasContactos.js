
const { PuntosVentas, PuntosVentasContactos } = require("../modelos")
const { handleHttpError, handleErrorResponse } = require("../utilidades/handleError")
const { matchedData } = require('express-validator')

const leer = async (req, res) => {
    try {
        const response = await PuntosVentasContactos.findAll({
            order: [['id', 'DESC']],
            include: [
                {
                    model: PuntosVentas,
                }
            ]
        })
        res.send({ response: true, message: response })
    } catch (error) {
        handleErrorResponse(res, "error al obtener items")
        return
    }
}
const leerId = async (req, res) => {
    try {
        const response = await PuntosVentasContactos.findAll({
            order: [['id', 'DESC']],
            where: {
                puntosVentaId: req.params.id
            },
            include: [
                {
                    model: PuntosVentas,
                }
            ]
        })
        res.send({ response: true, message: response })
    } catch (error) {
        handleErrorResponse(res, "error al obtener items")
        return
    }
}
const insertar = async (req, res) => {
    try {
        body = matchedData(req)
        const response = await PuntosVentasContactos.create(body)
        res.send({ response: true, message: "Insertado correctamente" })
    } catch (error) {
        handleErrorResponse(res, "error al crear contacto")
        return
    }
}
module.exports = { leer, leerId, insertar }



