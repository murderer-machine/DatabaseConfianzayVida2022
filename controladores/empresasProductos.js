
const EmpresasSegurosProductos = require('../modelos/empresasSegurosProductos')
const EmpresasSeguros = require('../modelos/empresasSeguros')
const { matchedData } = require('express-validator')
const { handleErrorResponse } = require('../utilidades/handleError')
const leer = async (req, res) => {
    try {
        const response = await EmpresasSegurosProductos.findAll({
            include: [
                { model: EmpresasSeguros },
            ]
        })
        res.send({ response: true, message: response })
    } catch (error) {
        handleErrorResponse(res, "error al obtener items")
        return
    }
}

module.exports = { leer }