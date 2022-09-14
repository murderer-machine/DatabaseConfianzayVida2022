const express = require("express")
const { leer, leerId,insertar } = require("../controladores/puntosVentasContactos")
const router = express.Router()

router.get("/", leer)
router.get("/:id", leerId)
router.post("/", insertar)


module.exports = router