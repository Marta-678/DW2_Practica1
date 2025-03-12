const express = require('express')
const cors = require('cors')
require ('dotenv').config()

// const routersUsers = require('./router/user.js')
const dbConnect = require('./configuracion/mongo.js')
dbConnect()
const app=express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})

// app.use("/api/users", routersUsers);
