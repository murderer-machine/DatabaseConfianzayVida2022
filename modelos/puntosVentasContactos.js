const { sequelize } = require('../config/mysql')
const { DataTypes } = require('sequelize')
const PuntosVentasContactos = sequelize.define('puntos_ventas_contactos',
    {
        puntosVentaId: {
            type: DataTypes.INTEGER,
        },
        nombres_apellidos: {
            type: DataTypes.STRING
        },
        celular: {
            type: DataTypes.STRING
        },
        correo: {
            type: DataTypes.STRING
        },
        eliminar: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        usuarioId: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    },
    {
        timestamps: true
    }
)
module.exports = PuntosVentasContactos
