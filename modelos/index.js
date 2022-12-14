const Usuarios = require('../modelos/usuarios')
const Clientes = require('../modelos/clientes')
const Polizas = require('../modelos/polizas')
const Ubigeos = require('../modelos/ubigeos')
const PolizasCupones = require('../modelos/polizasCupones')
const ClientesContactos = require('../modelos/clientesContactos')
const EmpresasSeguros = require('../modelos/empresasSeguros')
const EmpresasSegurosProductos = require('../modelos/empresasSegurosProductos')
const Ramos = require('../modelos/ramos')
const PolizasDescripciones = require('../modelos/polizasDescripciones')
const PolizasVehiculos = require('../modelos/polizasVehiculos')
const Monedas = require('../modelos/monedas')
const EmpresasBancarias = require('../modelos/empresasBancarias')
const PuntosVentas = require('../modelos/puntosVentas')
const PuntosVentasContactos = require('../modelos/puntosVentasContactos')
const MensajesWhatsapp = require('../modelos/mensajesWhatsapp')

Clientes.hasMany(Polizas)
Polizas.belongsTo(Clientes)

Ubigeos.hasMany(Clientes)
Clientes.belongsTo(Ubigeos)

Clientes.hasMany(ClientesContactos)
ClientesContactos.belongsTo(Clientes)

Polizas.hasMany(PolizasCupones)
PolizasCupones.belongsTo(Polizas)

EmpresasSeguros.hasMany(Polizas)
Polizas.belongsTo(EmpresasSeguros)

EmpresasSegurosProductos.hasMany(Polizas)
Polizas.belongsTo(EmpresasSegurosProductos)

EmpresasSeguros.hasMany(EmpresasSegurosProductos)
EmpresasSegurosProductos.belongsTo(EmpresasSeguros)

Ramos.hasMany(Polizas)
Polizas.belongsTo(Ramos)

Polizas.hasOne(PolizasDescripciones)
PolizasDescripciones.belongsTo(Polizas)

Polizas.hasOne(PolizasVehiculos)
PolizasVehiculos.belongsTo(Polizas)

Ramos.hasMany(EmpresasSegurosProductos)
EmpresasSegurosProductos.belongsTo(Ramos)

Ubigeos.hasMany(PuntosVentas)
PuntosVentas.belongsTo(Ubigeos)

PuntosVentas.hasMany(PuntosVentasContactos)
PuntosVentasContactos.belongsTo(PuntosVentas)

module.exports = {
    Usuarios,
    Clientes,
    Polizas,
    Ubigeos,
    ClientesContactos,
    PolizasCupones,
    EmpresasSeguros,
    EmpresasSegurosProductos,
    Ramos,
    PolizasDescripciones,
    PolizasVehiculos,
    Ramos,
    Monedas,
    EmpresasBancarias,
    PuntosVentas,
    PuntosVentasContactos,
    MensajesWhatsapp
}


