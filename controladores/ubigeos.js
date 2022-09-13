
const { Ubigeos } = require('../modelos')
const { handleHttpError, handleErrorResponse } = require("../utilidades/handleError")
const leer = async (req, res) => {
    try {
        const response = await Ubigeos.findAll({
            order: [['departamento', 'ASC']],
        })
        res.send({ response: true, message: response })
    } catch (error) {
        handleErrorResponse(res, "error al obtener items")
        return
    }
}
module.exports = { leer }



