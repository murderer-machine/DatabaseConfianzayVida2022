const { sequelize } = require('../config/mysql')
const { DataTypes } = require('sequelize')
const PolizasVehiculos = sequelize.define('polizas_vehiculos',
    {
        polizaId: {
            type: DataTypes.INTEGER,
        },
        placa: {
            type: DataTypes.STRING,
        },
        clase: {
            type: DataTypes.INTEGER,
        },
        uso: {
            type: DataTypes.INTEGER,
        },
        categoria: {
            type: DataTypes.INTEGER,
        },
        marca: {
            type: DataTypes.INTEGER,
        },
        modelo: {
            type: DataTypes.INTEGER,
        },
        ano: {
            type: DataTypes.INTEGER,
        },
        nro_asientos: {
            type: DataTypes.INTEGER,
        },
        nro_pasajeros: {
            type: DataTypes.INTEGER,
        },
        nro_serie: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false
    }
)

module.exports = PolizasVehiculos