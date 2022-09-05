const express = require("express")
const { leer, eliminar, actualizar, insertar } = require("../controladores/empresasProductos")
const { validadorActualizar } = require("../validadores/empresasProductos")
// const { validadorActualizar } = require("../validadores/empresasSeguros")
const router = express.Router()

router.get("/", leer)
router.delete("/:id", eliminar)
router.put("/", validadorActualizar, actualizar)
router.post("/", validadorActualizar, insertar)

module.exports = router
