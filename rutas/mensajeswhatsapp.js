const express = require("express")
const { leer, actualizar, eliminar, insertar } = require("../controladores/mensajeswhatsapp")
const router = express.Router()

router.get("/", leer)
router.put("/", actualizar)
router.delete("/:id", eliminar)
router.post("/", insertar)

module.exports = router
