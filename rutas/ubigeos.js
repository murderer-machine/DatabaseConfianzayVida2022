const express = require("express")
const router = express.Router()
const { leer } = require("../controladores/ubigeos")

router.get("/", leer)

module.exports = router