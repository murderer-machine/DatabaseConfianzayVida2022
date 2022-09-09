const express = require("express")
const { leer, actualizar, eliminar, insertar } = require("../controladores/puntosVentas")
const { validador } = require("../validadores/puntosVentas")
const router = express.Router()

router.get("/", leer)
router.put("/", validador, actualizar)
router.delete("/:id", eliminar)
router.post("/", validador, insertar)

module.exports = router