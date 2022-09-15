const express = require("express")
const { leer, leerId,insertar } = require("../controladores/puntosVentasContactos")
const { validador } = require("../validadores/puntosVentasContactos")
const router = express.Router()

router.get("/", leer)
router.get("/:id", leerId)
router.post("/",validador, insertar)


module.exports = router