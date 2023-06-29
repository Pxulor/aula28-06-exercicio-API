require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()

const boletimRoutes = require("./routes/boletimRoutes")
const database = require("./database/mongoConfig")

app.use(express.json())
app.use(cors())

database.connect()

app.use("/api", boletimRoutes)

module.exports=app