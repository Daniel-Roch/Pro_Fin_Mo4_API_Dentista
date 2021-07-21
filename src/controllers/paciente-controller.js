//fazendo requisição para a models da class paciente.
const Paciente = require('../models/PacienteModels')
//Fazendo requisição para PacienteDAO
const PacienteDao = require('../DAO/PacienteDao')

//Exportando a rota - e recebendo o parametro app.
module.exports = (app,db) =>{
    const pacienteDao = new PacienteDao(db)
    //Mostra todo o banco de dados.
    app.get('/paciente',async (req,res)=>{  
        //fazendo a devida requisição ao DAO - e colocando "await" para aguardar a reposta.
        await pacienteDao.getAllPaciente()
            .then(rows => res.status(200).json(rows))
            .catch(err => res.status(500).json({err}))
    })
    //Mostrar somente um - pelo CPF
    app.get('/paciente/:cpf',async (req,res)=>{
        //fazendo a devida requisição ao DAO - e colocando "await" para aguardar a reposta.
        await pacienteDao.getPaciente(req.params.cpf)
            .then(row =>res.status(200).json(row))
            .catch(erro => res.status(500).json({erro}))
    })
    //Enviar dados.
    app.post('/paciente',async (req,res)=>{
        //Pegando o corpo da requisição
        const {nome,email,idade,cpf} = req.body
        //recebendo a validação do models e já tratando caso tenha dado algum erro.
        try{
            //criando a nova class Paciente.
            const newPaciente = new Paciente(nome,email,idade,cpf)
            //Se estiver tudo certo ele passa para DAO
            await pacienteDao.setPaciente(newPaciente)
                .then(sucess=> res.status(201).json(sucess))
                .catch(erro => res.status(500).json({"Envio de dados" : false, erro}))

        }catch(erro){
            //caso tenha vindo algum erro do moment, está parte devolverá qual erro aconteceu.
            res.status(400).json(erro.message)
        }
        /* Paciente.adiciona(db, req.body, res) */
    })
}