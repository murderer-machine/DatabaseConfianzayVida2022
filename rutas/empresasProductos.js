const express = require("express")
const { leer, eliminar } = require("../controladores/empresasProductos")
// const { validadorActualizar } = require("../validadores/empresasSeguros")
const router = express.Router()

router.get("/", leer)
router.delete("/:id", eliminar)


module.exports = router
