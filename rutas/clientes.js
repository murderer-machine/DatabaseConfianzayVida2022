const express = require("express")
const { leer } = require("../controladores/clientes")
const router = express.Router()

router.get("/", leer)


module.exports = router