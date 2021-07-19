//fazendo requisi para a models da class paciente.
const Paciente = require('../models/PacienteModels')

//Exportando a rota - e recebendo o parametro app.
module.exports = (app,db) =>{
    //Mostra todo o banco de dados.
    app.get('/paciente',(req,res)=>{
        Paciente.mostrar(db,res)
    })
    //Enviar dados.
    app.post('/paciente',(req,res)=>{
        Paciente.adiciona(db, req.body, res)
    })
}