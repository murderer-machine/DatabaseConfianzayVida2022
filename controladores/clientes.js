
const { Clientes } = require("../modelos")
const { handleHttpError, handleErrorResponse } = require("../utilidades/handleError")
const leer = async (req, res) => {
    try {
        const response = await Clientes.findAll({
            order: [['id', 'DESC']],
        })
        res.send({ response: true, message: response })
    } catch (error) {
        handleErrorResponse(res, "error al obtener items")
        return
    }
}
module.exports = { leer }



