const { sequelize } = require('../config/mysql')
const { DataTypes } = require('sequelize')
const Monedas = sequelize.define('monedas',
    {
        descripcion: {
            type: DataTypes.STRING,
        },
        simbolo: {
            type: DataTypes.STRING,
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

module.exports = Monedas