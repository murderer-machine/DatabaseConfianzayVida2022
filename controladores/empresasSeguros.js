const EmpresasSeguros = require('../modelos/empresasSeguros')
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
module.exports = {leer}