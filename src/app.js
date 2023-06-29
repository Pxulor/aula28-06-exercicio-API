const express = require("express")
const cors = require("cors")
const boletimRoutes = require("./routes/boletimRoutes")
const app = express()

app.use(express.json())
app.use(cors())

app.use("/api", boletimRoutes)

module.exports=app