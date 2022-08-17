const { sequelize } = require('../config/mysql')
const { DataTypes } = require('sequelize')

const ClientesContactos = sequelize.define('clientes_contactos',
    {
        clienteId: {
            type: DataTypes.INTEGER,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        telefono: {
            type: DataTypes.STRING,
        },
        celular: {
            type: DataTypes.STRING,
        },
        correo: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false
    }
)

module.exports = ClientesContactos

