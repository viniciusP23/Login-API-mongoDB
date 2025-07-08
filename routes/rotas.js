import { Router } from "express";
import User from "../model/Users.js"

const routes = Router()

// login
routes.post("/login", async (req, res) => {
    const {nome, senha} = req.body
    const user = await User.findOne({nome, senha})

    if(!user) return res.status(400).json({mensagem: "Login invalido!"})
    
    res.json({mensagem: "Login bem-sucedido", usuario: user})
})

// criar login
routes.post("/", async (req, res) => {
    try {
        const novo = await User.create(req.body)
        res.status(201).json(novo)
    }catch(err) {
        console.error("Erro ao salvar:", err)
        res.status(500).json({
            mensagem: "Erro ao salvar no banco!",
            erro: err.mensagem
        })
    }
})

routes.put("/:id", async (req, res) => {
    try{
        const atualizado = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!atualizado) return res.status(404).json({mensagem: "Usuario não encontrado!"})
        res.json(atualizado)
    }catch(err) {
        res.status(500).json({mensagem: "Erro ao atualizar usuario."})
    }
})

routes.delete("/:id", async (req, res) => {
    try {
        const deletado = await User.findByIdAndDelete(req.params.id)
        if(!deletado) return res.status(404).json({mensagem: "usuario não encontrado"})
        res.json(deletado)
    }catch(err) {
        res.status(500).json({mensagem: "Erro ao deletar usuario."})
    }
})

routes.get("/", async (req, res) => {
    try {
        const todosUsuarios = await User.find()
        res.status(200).json(todosUsuarios)
    }catch(err) {
        res.status(500).json({mensagem: "Erro ao buscar usuario!"})
    }
})

routes.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if(!user) return res.status(404).json({mensagem: "usuario não encontrado"})
        res.status(200).json(user)   
    }catch(err) {
        res.status(500).json({mensagem: "Erro ao buscar usuario pelo ID."})
    }
})

export default routes