const { verificarToken } = require("../utilidades/handleToken");
const { handleHttpError, handleErrorResponse } = require("../utilidades/handleError");
const Usuarios = require("../modelos/usuarios");


const checkAuth = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handleErrorResponse(res, "NOT_ALLOW", 409);
            return
        }
        const token = req.headers.authorization.split(" ").pop()
        const tokenData = await verificarToken(token)
        if (!tokenData.id) {
            handleErrorResponse(res, "NOT_ALLOW", 401)
            return
        }
        const user = await Usuarios.findByPk(tokenData.id)
        req.user = user
        next()
    } catch (e) {
        handleErrorResponse(res, `no hay token ${req.headers.authorization}`)
    }
}

module.exports = checkAuth