const express = require("express")
const rotas = express.Router()
const boletimControllers= require("../controllers/boletimControllers")

rotas.get("/lista", boletimControllers.exibeTodos)
rotas.get("/id/:id", boletimControllers.exibePorId)
rotas.get("/boletim/:id", boletimControllers.exibeNotas)

rotas.post("/criar", boletimControllers.criaCadastro)
rotas.patch("/alterar/:id", boletimControllers.alteraCadastro)
rotas.delete("/deletar/:id", boletimControllers.deletaCadastro)

module.exports=rotas