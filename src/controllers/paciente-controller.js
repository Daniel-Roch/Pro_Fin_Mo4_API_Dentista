//fazendo requisição para a models da class paciente.
const Paciente = require('../models/PacienteModels')
//Fazendo requisição para PacienteDAO
const PacienteDao = require('../DAO/PacienteDao')

//Exportando a rota - e recebendo o parametro app.
module.exports = (app,db) =>{
    const pacienteDao = new PacienteDao(db)
    //Mostra todo o banco de dados.---------------
    app.get('/paciente',async (req,res)=>{  
        //fazendo a devida requisição ao DAO - e colocando "await" para aguardar a reposta.
        await pacienteDao.getAllPaciente()
            .then(rows => res.status(200).json(rows))
            .catch(err => res.status(400).json({err}))
    })
    //Enviar dados.------------------------------
    app.post('/paciente',(req,res)=>{
        
        Paciente.adiciona(db, req.body, res)
    })
}