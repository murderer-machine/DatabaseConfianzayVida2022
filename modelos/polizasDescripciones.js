const { sequelize } = require('../config/mysql')
const { DataTypes } = require('sequelize')
const PolizasDescripciones = sequelize.define('polizas_descripciones',
    {
        polizaId: {
            type: DataTypes.INTEGER,
        },
        id_subagente: {
            type: DataTypes.INTEGER,
        },
        fecha_emision: {
            type: DataTypes.DATE,
        },
        tipo_vigencia: {
            type: DataTypes.INTEGER,
        },
        fecha_vigencia_inicio: {
            type: DataTypes.DATE,
        },
        fecha_vigencia_fin: {
            type: DataTypes.DATE,
        },
        ejecutivo: {
            type: DataTypes.INTEGER,
        },
        id_garantia: {
            type: DataTypes.INTEGER,
        },
        id_cargo: {
            type: DataTypes.INTEGER,
        },
        pago_empresa: {
            type: DataTypes.INTEGER,
        },
        pago_sub_agente: {
            type: DataTypes.INTEGER,
        },
        prima_total: {
            type: DataTypes.DECIMAL(10, 2),
        },
        prima_comercial: {
            type: DataTypes.DECIMAL(10, 2),
        },
        prima_neta: {
            type: DataTypes.DECIMAL(10, 2),
        },
        comision: {
            type: DataTypes.DECIMAL(10, 2),
        },
        porcentaje: {
            type: DataTypes.DECIMAL(10, 2),
        },
        comision_subagente: {
            type: DataTypes.DECIMAL(10, 2),
        },
        tipo_documento_poliza: {
            type: DataTypes.INTEGER,
        },
        tipo_pago: {
            type: DataTypes.INTEGER,
        },
        cancelado: {
            type: DataTypes.INTEGER,
        }
    },
    {
        timestamps: false
    }
)

module.exports = PolizasDescripciones