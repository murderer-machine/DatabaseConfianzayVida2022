const { sequelize } = require('../config/mysql')
const { DataTypes } = require('sequelize')
const moment = require('moment')
const PuntosVentas = sequelize.define('puntos_ventas', {
    nombres: {
        type: DataTypes.STRING,
    },
    apellidos: {
        type: DataTypes.STRING,
    },
    abreviatura: {
        type: DataTypes.STRING,
    },
    direccion: {
        type: DataTypes.STRING,
    },
    referencia: {
        type: DataTypes.STRING,
    },
    ubigeoId: {
        type: DataTypes.INTEGER,
    },
    comision: {
        type: DataTypes.DECIMAL,
    },
    fecha_activacion: {
        type: DataTypes.DATE,
        defaultValue: moment().format('YYYY-MM-DD')
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    observaciones: {
        type: DataTypes.TEXT,
    },
    eliminar: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    whatsappId: {
        type: DataTypes.STRING,
        defaultValue: '0'
    }

}, {
    timestamps: true
})
module.exports = PuntosVentas