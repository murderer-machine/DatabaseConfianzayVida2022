const { sequelize } = require('../config/mysql')
const { DataTypes } = require('sequelize')

const EmpresasSeguros = sequelize.define('empresas_seguros',
    {
        nombre: {
            type: DataTypes.STRING,
        },
        ruc: {
            type: DataTypes.STRING,
        },
        factorGeneral: {
            type: DataTypes.DECIMAL,
        },
        factorSoat: {
            type: DataTypes.DECIMAL,
        },
        gastosEmision: {
            type: DataTypes.DECIMAL,
        },
        gastosEmisionMinimo: {
            type: DataTypes.DECIMAL,
        },
        gastosEmisionMinimoSoat: {
            type: DataTypes.DECIMAL,
        },
        activo: {
            type: DataTypes.BOOLEAN,
        },
        logo: {
            type: DataTypes.STRING,
            defaultValue : ''
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

module.exports = EmpresasSeguros

