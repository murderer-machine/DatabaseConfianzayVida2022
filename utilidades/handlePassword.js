const bcrypt = require("bcryptjs")

const encriptar = async (password) => {
    const passordEncriptado = await bcrypt.hash(password, 14)
    return passordEncriptado
}
const comparar = async (passwordCliente, passordEncriptado) => {
    return await bcrypt.compare(passwordCliente, passordEncriptado)
}
module.exports = { encriptar, comparar }