const { sequelize } = require('../config/mysql')
const { DataTypes } = require('sequelize')
const PolizasCupones = sequelize.define('polizas_cupones',
    {
        polizaId: {
            type: DataTypes.INTEGER,
        },
        nroOrden: {
            type: DataTypes.INTEGER,
        },
        nroCuota: {
            type: DataTypes.INTEGER,
        },
        importe: {
            type: DataTypes.DECIMAL,
        },
        fechaObligacion: {
            type: DataTypes.DATE,
        },
        fechaLimite: {
            type: DataTypes.DATE,
        },
        situacion: {
            type: DataTypes.INTEGER,
        },
        fechaPago: {
            type: DataTypes.STRING,
        },
        observaciones: {
            type: DataTypes.TEXT,
        },
        revisadoGeneral: {
            type: DataTypes.TINYINT,
        },
        
    },
    {
        timestamps: false
    }
)

module.exports = PolizasCupones
