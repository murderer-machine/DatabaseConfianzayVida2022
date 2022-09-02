const express = require("express")
const { leer } = require("../controladores/ramos")
// const { validadorActualizar } = require("../validadores/empresasSeguros")
const router = express.Router()

router.get("/", leer)



module.exports = router
