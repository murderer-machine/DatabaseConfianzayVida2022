const express = require("express")
const { leer } = require("../controladores/empresasBancarias")
const router = express.Router()

router.get("/", leer)


module.exports = router