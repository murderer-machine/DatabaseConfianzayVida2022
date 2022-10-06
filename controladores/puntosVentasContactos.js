
const { PuntosVentas, PuntosVentasContactos } = require("../modelos")
const { handleHttpError, handleErrorResponse } = require("../utilidades/handleError")
const { matchedData } = require('express-validator')

const leer = async (req, res) => {
    try {
        const response = await PuntosVentasContactos.findAll({
            where: [
                { eliminar: false }
            ],
            order: [['id', 'DESC']],
            include: [
                {
                    model: PuntosVentas,
                }
            ]
        })
        res.send({ response: true, message: response })
    } catch (error) {
        handleErrorResponse(res, "error al leer")
        return
    }
}
const leerId = async (req, res) => {
    try {
        const response = await PuntosVentasContactos.findAll({
            order: [['id', 'DESC']],
            where: [
                {
                    puntosVentaId: req.params.id,
                    eliminar: false
                }
            ],
            include: [
                {
                    model: PuntosVentas,
                }
            ]
        })
        res.send({ response: true, message: response })
    } catch (error) {
        handleErrorResponse(res, "error al leer")
        return
    }
}
const insertar = async (req, res) => {
    try {
        body = matchedData(req)
        const response = await PuntosVentasContactos.create(body)
        res.send({ response: true, message: "Insertado correctamente" })
    } catch (error) {
        handleErrorResponse(res, "error al insertar")
        return
    }
}
const eliminar = async (req, res) => {
    try {
        const response = await PuntosVentasContactos.findByPk(req.params.id)

        await response.destroy()
        res.send({ response: true, message: "eliminado correctamente" })
    } catch (error) {
        handleErrorResponse(res, "error al eliminar")
        return
    }
}
module.exports = { leer, leerId, insertar, eliminar }



