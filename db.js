import mongoose from "mongoose";

dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("✅ Conectado ao MongoDB Atlas"))
.catch((err) => console.error("❌ Erro ao conectar:", err))