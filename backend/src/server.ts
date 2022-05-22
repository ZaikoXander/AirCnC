import express, { Express, json } from "express"
import mongoose from "mongoose"
import cors from "cors"

import routes from "./routes"

const app: Express = express()

mongoose.connect("mongodb+srv://omnistack:omnistack@omnistack.o4c8v.mongodb.net/semana09?retryWrites=true&w=majority") /* , {
    useNewUrlParser: true,
    useUnifiedTopology: true
} */

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

app.use(cors())
app.use(json())
app.use(routes)

app.listen(3333)
