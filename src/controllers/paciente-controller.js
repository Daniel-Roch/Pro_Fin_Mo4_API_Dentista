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
            .catch(err => res.status(500).json({err}))
    })
    //Enviar dados.------------------------------
    app.post('/paciente',(req,res)=>{
        const {nome,email,idade,cpf} = req.body
        //recebendo a validação do models e já tratando caso tenha dado algum erro.
        try{
            const newPaciente = new Paciente(nome,email,idade,cpf)
            pacienteDao.setPaciente(newPaciente)
            
        }catch(erro){
            res.status(400).json(erro.message)
        }
        /* Paciente.adiciona(db, req.body, res) */
    })
}