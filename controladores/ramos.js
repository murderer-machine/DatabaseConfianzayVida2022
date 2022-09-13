
const { Ramos } = require('../modelos')
const { handleErrorResponse } = require('../utilidades/handleError')
const leer = async (req, res) => {
    try {
        const response = await Ramos.findAll()
        res.send({ response: true, message: response })
    } catch (error) {
        handleErrorResponse(res, "error al obtener ramos")
        return
    }
}
module.exports = { leer }