
const { Polizas, Clientes, Ubigeos, ClientesContactos, PolizasCupones, EmpresasSeguros, EmpresasSegurosProductos, Ramos, PolizasDescripciones, PolizasVehiculos } = require('../modelos')
const { handleErrorResponse } = require("../utilidades/handleError")
const { Op } = require("sequelize")
const moment = require('moment')
const xl = require('excel4node')


const mostrarTodo = async (req, res) => {
    try {
        const todo = {
            model: PolizasCupones,
            order: [
                ['nroOrden', 'ASC']
            ]
        }
        const noPagado = {
            where: {
                situacion: 0,
            }
        }
        const vencidas = {
            where: {
                situacion: 0,
                fechaObligacion: {
                    [Op.between]: [moment().subtract(100, 'years').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')]
                }
            }
        }
        var respuesta = () => {
            switch (Number(req.query.situacion)) {
                case 1:
                    return Object.assign(todo)
                case 2:
                    return Object.assign(todo, noPagado)
                case 3:
                    return Object.assign(todo, vencidas)
            }
        }
        const response = await Clientes.findAll(
            {
                include: [
                    {
                        model: Polizas,
                        include: [
                            respuesta(),
                            { model: EmpresasSeguros },
                            { model: EmpresasSegurosProductos },
                            { model: Ramos },
                            { model: PolizasDescripciones },
                            { model: PolizasVehiculos }
                        ]
                    },
                    { model: Ubigeos },
                    { model: ClientesContactos },
                ]
            }
        )
        res.send({ response: true, message: response })
    } catch (error) {
        handleErrorResponse(res, "error al obtener items")
        return
    }
}

const generarExcel = (req, res) => {
    const { body } = req

    var wb = new xl.Workbook()
    var ws = wb.addWorksheet('Polizas')
    var style = wb.createStyle({
        font: {
            bold: true
        },
    })
    ws.cell(1, 1).string('Nombre').style(style)
    ws.cell(1, 2).string('Celular').style(style)
    ws.cell(1, 3).string('Correo').style(style)
    ws.cell(1, 4).string('Compañia').style(style)
    ws.cell(1, 5).string('Nº poliza').style(style)
    ws.cell(1, 6).string('Fecha Emisión').style(style)
    ws.cell(1, 7).string('Placa').style(style)
    ws.cell(1, 8).string('Nº cupon').style(style)
    ws.cell(1, 9).string('Fecha Obligacion').style(style)
    var resultado = 0
    for (let index = 0; index < body.length; index++) {
        if (body[index].polizas.length > 0) {
            for (let index2 = 0; index2 < body[index].polizas.length; index2++) {
                for (let index3 = 0; index3 < body[index].polizas[index2].polizas_cupones.length; index3++) {
                    ws.cell(resultado + 2, 1).string(body[index].nombre.toString())
                    ws.cell(resultado + 2, 2).string(body[index].clientes_contactos[0].celular.toString())
                    ws.cell(resultado + 2, 3).string(body[index].clientes_contactos[0].correo.toString())
                    ws.cell(resultado + 2, 4).string(body[index].polizas[index2].empresas_seguro.nombre.toString())
                    ws.cell(resultado + 2, 5).string(body[index].polizas[index2].nroPoliza)
                    ws.cell(resultado + 2, 6).date(moment(body[index].polizas[index2].polizas_descripcione.fecha_emision.toString(), "YYYY-MM-DD").format('YYYY-MM-DD')).style({ numberFormat: 'dd/mm/yyyy' })
                    ws.cell(resultado + 2, 7).string(body[index].polizas[index2].polizas_vehiculo ? body[index].polizas[index2].polizas_vehiculo.placa.toString() : '')
                    ws.cell(resultado + 2, 8).string(body[index].polizas[index2].polizas_cupones[index3].nroCuota.toString())
                    ws.cell(resultado + 2, 9).date(moment(body[index].polizas[index2].polizas_cupones[index3].fechaObligacion.toString(), "YYYY-MM-DD").format('YYYY-MM-DD')).style({ numberFormat: 'dd/mm/yyyy' })
                    resultado++
                }
            }
        }
    }
    const pathExcel = `./public/excelGenerado/reporte.xlsx`
    wb.write(pathExcel, (err, stats) => {
        if (err) {
            handleErrorResponse(res, "error al generar excel")
            return
        }
        res.download(pathExcel)
    })
}
module.exports = { mostrarTodo, generarExcel }