import { UsuarioModel } from "../model/UsuarioModel.js"

export const user = (app, db) => {
    app.get("/user", (req, res) => {
        // res.send('Rastreamento da aplicação sendo feito com nodemon')
        res.send(db.users)
    })

    app.post("/user", (req, res) => {
        const body = req.body
        const newUser = new UsuarioModel(body.name, body.email, body.senha, body.avatar, body.dataNascimento, body.ativo)
        db.users.push(newUser)
        res.send(req.body) 
    })

    app.get("/user/:id", (req, res) => {
        const param = req.params.id
        const users = db.users
        res.send(users.filter(el => el.id == param))
    })

    app.delete("/user/:id", (req, res) => {
        const param = req.params.id
        const users = db.users
        const id = users.filter(el => el.id == param)

        const sucessMsg = {
            "message": `${param} deleted`
        }

        const failMsg = {
            "message": `${param} not found`
        }

        users.splice(users.indexOf(id), 1)

        res.send(id !== [] ? sucessMsg : failMsg)
    })
}
