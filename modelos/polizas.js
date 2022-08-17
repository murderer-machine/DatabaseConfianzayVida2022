const { sequelize } = require('../config/mysql')
const { DataTypes } = require('sequelize')
const Polizas = sequelize.define('polizas',
    {
        nroPoliza: {
            type: DataTypes.STRING,
        },
        nroPolizaCorregido: {
            type: DataTypes.STRING,
        },
        clienteId: {
            type: DataTypes.INTEGER,
        },
        empresasSeguroId: {
            type: DataTypes.INTEGER,
        },
        empresasSegurosProductoId: {
            type: DataTypes.INTEGER,
        },
        ramoId: {
            type: DataTypes.INTEGER,
        },
        moneda: {
            type: DataTypes.STRING,
        },
        descripcion: {
            type: DataTypes.STRING,
        },
        endosoAfavor: {
            type: DataTypes.STRING,
        },
        anulada: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        idUsuario: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: true
    }
)

module.exports = Polizas
