const express = require('express')
const { mostrarTodo, generarExcel } = require('../controladores/polizas')
const router = express.Router()

router.get("/", mostrarTodo)
router.post("/generar", generarExcel)
module.exports = router