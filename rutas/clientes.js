const express = require("express")
const { getAll } = require("../controladores/clientes")
const router = express.Router()

router.get("/", getAll)


module.exports = router