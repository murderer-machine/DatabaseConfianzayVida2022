
const multer = require("multer")

const disco = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `${__dirname}/../public`)
    },
    filename: (req, file, cb) => {    
        const ext = file.originalname.split('.').pop()
        const nombreArchivo = `${Date.now()}.${ext}`
        cb(null, nombreArchivo)
    }
})
const subirImagen = multer({ storage: disco })
module.exports = { subirImagen }
