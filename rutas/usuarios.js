const express = require("express")
const { create, update, eliminar, getitems, login, cambiarContrasena, generarUsuarios, pruebas } = require("../controladores/usuarios")
const roles = require("../middleware/roles")
const { subirImagen } = require("../utilidades/handleSubirImagen")

const { validadorRegistroUsuario, validadorContrasena, validadorEditarUsuario } = require("../validadores/usuarios")
const router = express.Router()

router.post("/", validadorRegistroUsuario, create)
router.get("/", getitems)
router.put("/:id", validadorEditarUsuario, update)
router.put("/:id", eliminar)
router.put("/cambiarcontrasena/:id", validadorContrasena, cambiarContrasena)

router.get("/generarusuarios/:valor", generarUsuarios)
router.get("/pruebas/:pagina", pruebas)

router.post("/subirimagen", subirImagen.single("imagen"), getitems)
router.post("/login", login)

module.exports = router