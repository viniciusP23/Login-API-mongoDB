import express from "express"
import routes from "./routes/rotas.js"
import cors from "cors"
import "./db.js"


const app = express()
app.use(express.json())
app.use(cors())
app.use("/", routes)


app.listen(3000, () => console.log("servidor conectado..."))