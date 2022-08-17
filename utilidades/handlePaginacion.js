
const handlePaginacion = async (req) => {
    const page = req.query.pagina && req.query.pagina > 0 ? Number.parseInt(req.query.pagina) - 1 : 0
    const size = req.query.tamano && req.query.tamano < 10 ? Number.parseInt(req.query.tamano) : 10
    const offset = page * size
    return { page, size, offset }
}

module.exports = { handlePaginacion }