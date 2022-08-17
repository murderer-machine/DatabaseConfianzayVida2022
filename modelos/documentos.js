const { sequelize } = require('../config/mysql')
const { DataTypes } = require('sequelize')
const Documentos = sequelize.define('documentos',
    {
        descripcion: {
            type: DataTypes.STRING,
            unique: true,
        },
        eliminar: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        timestamps: true
    }
)

module.exports = Documentos