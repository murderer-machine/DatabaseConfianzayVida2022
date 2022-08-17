
const Clientes = require("../modelos/clientes")
const Documentos = require("../modelos/documentos")
const { handleHttpError, handleErrorResponse } = require("../utilidades/handleError")

const getAll = async (req, res) => {
    Documentos.hasOne(Clientes, { foreignKey: 'documentoId' })
    Clientes.belongsTo(Documentos)
    try {
        const response = await Clientes.findAll({
            order: [['id', 'DESC']],
            include: { model: Documentos, attributes: ['descripcion'] }
        })
        res.send({ response: true, message: response })
    } catch (error) {
        handleErrorResponse(res, "error al obtener items")
        return
    }
}


module.exports = { getAll }



