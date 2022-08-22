const express = require("express")
const { leer } = require("../controladores/empresasSeguros")
const router = express.Router()

router.get("/", leer)

module.exports = router
