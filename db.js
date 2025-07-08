import mongoose from "mongoose";

mongoose.connect("mongodb+srv://testemongo01:Palmeiras1@cluster0.fagscgv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("✅ Conectado ao MongoDB Atlas"))
.catch((err) => console.error("❌ Erro ao conectar:", err))