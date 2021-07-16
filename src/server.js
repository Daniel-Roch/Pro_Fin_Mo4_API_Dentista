//Chamando o express e colocando dentro da constante app.
const express = require('express')
const app = express()

//chamando o express.json() para ler aquivos que o req, e multi envios.
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Chamando a rota do controller - e passando o express para ele.
const rotaPaciente = require('./controllers/paciente-controller')
rotaPaciente(app)

//Abrindo a porta:
app.listen(3050,()=>{console.log('Port: http://localhost:3050')})