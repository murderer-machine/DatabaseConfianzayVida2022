const express = require("express")
const { leer, actualizar } = require("../controladores/empresasSeguros")
const { validadorActualizar } = require("../validadores/empresasSeguros")
const router = express.Router()

router.get("/", leer)
router.put("/", validadorActualizar, actualizar)
module.exports = router
