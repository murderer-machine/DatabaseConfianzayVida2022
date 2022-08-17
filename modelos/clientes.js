const { sequelize } = require('../config/mysql')
const { DataTypes } = require('sequelize')
const Clientes = sequelize.define('clientes',
    {
        nombre: {
            type: DataTypes.STRING,
            unique: true,
        },
        idTipoDoc: {
            type: DataTypes.INTEGER,
        },
        nroDoc: {
            type: DataTypes.STRING
        },
        idGiroNegocio: {
            type: DataTypes.INTEGER
        },
        direccion: {
            type: DataTypes.STRING
        },
        referencia: {
            type: DataTypes.STRING
        },
        ubigeoId: {
            type: DataTypes.INTEGER
        },
        idSubagente: {
            type: DataTypes.INTEGER
        },
        eliminar: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    },
    {
        timestamps: true
    }
)



module.exports = Clientes

