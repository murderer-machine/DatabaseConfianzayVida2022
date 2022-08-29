const express = require("express")
const { leer, actualizar, eliminar, insertar } = require("../controladores/empresasSeguros")
const { validadorActualizar } = require("../validadores/empresasSeguros")
const router = express.Router()

router.get("/", leer)
router.put("/", validadorActualizar, actualizar)
router.delete("/:id", eliminar)
router.post("/", validadorActualizar, insertar)

module.exports = router
