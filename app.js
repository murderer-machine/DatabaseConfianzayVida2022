require('dotenv').config()
const express = require('express')
const app = express()
const port = 3002
const cors = require("cors")
const { dbConnectMySQL } = require('./config/mysql')

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`tu servidor esta levantado ${port}`)
})

app.use('/api', require('./rutas'))


//conector de DB
dbConnectMySQL()
