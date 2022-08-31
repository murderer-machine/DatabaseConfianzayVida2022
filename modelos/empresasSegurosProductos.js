const { sequelize } = require('../config/mysql')
const { DataTypes } = require('sequelize')
const EmpresasSegurosProductos = sequelize.define('empresas_seguros_productos',
    {
        nombre: {
            type: DataTypes.STRING,
            unique: true,
        },
        empresasSeguroId: {
            type: DataTypes.INTEGER,
        },
        ramoId: {
            type: DataTypes.INTEGER
        },
        comision: {
            type: DataTypes.DECIMAL
        },
        eliminar: {
            type: DataTypes.BOOLEAN,
        }
    },
    {
        timestamps: false
    }
)
module.exports = EmpresasSegurosProductos

