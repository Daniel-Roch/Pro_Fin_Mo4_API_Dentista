//fazendo requisi para a models da class paciente.
const Paciente = require('../models/PacienteModels')

//Exportando a rota - e recebendo o parametro app.
module.exports = (app,db) =>{
    app.get('/paciente',(req,res)=>{
        Paciente.mostrar(db,res)
    })
}