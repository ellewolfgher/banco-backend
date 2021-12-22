const express = require('express')
const app = express()
const port = 7777
const routers = require('./routers')
require('./config/conn')

app.use(express.json())
app.use('/banco', routers)

const cors = require('cors')
app.use(cors())

app.listen(port, () => {
    console.log('Servidor rodando com sucesso.')
})