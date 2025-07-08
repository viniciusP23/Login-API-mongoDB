import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nome: String,
    sobrenome: String,
    senha: String
})

export default mongoose.model("User", userSchema)