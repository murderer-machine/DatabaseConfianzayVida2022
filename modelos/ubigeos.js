const { sequelize } = require('../config/mysql')
const { DataTypes } = require('sequelize')
const Ubigeos = sequelize.define('ubigeos',
    {
        departamento: {
            type: DataTypes.STRING,

        },
        provincia: {
            type: DataTypes.STRING,

        },
        distrito: {
            type: DataTypes.STRING,
        }
    },
    {
        timestamps: false
    }

)

module.exports = Ubigeos