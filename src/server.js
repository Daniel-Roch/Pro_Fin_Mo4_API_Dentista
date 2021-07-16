//Chamando o express e colocando dentro da constante app.
const express = require('express')
const app = express()

//chamando o express.json() para ler aquivos que o req enviar.
app.use(express.json())
//Ler - multi envios.
app.use(express.urlencoded({extended: true}))



//Abrindo a porta:
app.listen(3050,()=>{console.log('Port: http://localhost:3050')})