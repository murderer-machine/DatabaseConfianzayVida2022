const { verificarToken } = require("../utilidades/handleToken");
const checkAuthWeb = async (req, res, next) => {
    const tokenData = await verificarToken(req.body.token)
    if (!tokenData) {
        res.send(false)
    } else {
        res.send(true)
    }
}
module.exports = checkAuthWeb