const { sequelize } = require('../config/mysql')
const { DataTypes } = require('sequelize')
const Ramos = sequelize.define('ramos',
    {
        descripcion: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false
    }
)

module.exports = Ramos