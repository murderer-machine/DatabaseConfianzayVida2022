const { sequelize } = require('../config/mysql')
const { DataTypes } = require('sequelize')
const Usuarios = sequelize.define('usuarios',
    {
        nroDoc: {
            type: DataTypes.STRING,
            unique: true,
        },
        nombres: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellidos: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        correo: {
            type: DataTypes.STRING,
        },
        rol: {
            type: DataTypes.STRING,
            defaultValue: 'admin'
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
module.exports = Usuarios