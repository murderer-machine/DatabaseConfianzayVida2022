const { sequelize } = require('../config/mysql')
const { DataTypes } = require('sequelize')
const MensajesWhatsapp = sequelize.define('mensajes_whatsapps',
    {
        puntosVentaId: {
            type: DataTypes.INTEGER,
        },
        mensaje: {
            type: DataTypes.TEXT,
        },
    },
    {
        timestamps: false
    }
)
module.exports = MensajesWhatsapp

