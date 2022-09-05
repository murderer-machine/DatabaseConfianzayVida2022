const express = require("express")
const { leer } = require("../controladores/monedas")

const router = express.Router()

router.get("/", leer)



module.exports = router
