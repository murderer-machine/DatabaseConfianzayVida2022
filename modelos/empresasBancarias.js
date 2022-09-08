const { sequelize } = require('../config/mysql')
const { DataTypes } = require('sequelize')
const EmpresasBancarias = sequelize.define('empresas_bancarias',
    {
        nombre: {
            type: DataTypes.STRING,
            unique: true,
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

module.exports = EmpresasBancarias