const jwt = require("jsonwebtoken")

const generarToken = async (dataUsuario) => {
    return jwt.sign(
        {
            id: dataUsuario.id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "2m",
        }
    )
}
const verificarToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (e) {
        return null
    }
}
module.exports = { generarToken, verificarToken }