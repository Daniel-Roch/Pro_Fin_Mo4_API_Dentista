const moment = require('moment')
class Paciente{
    //Fazendo a devida validação
    constructor(nome,email,idade,cpf){
        if(nome.length > 4){
            this.nome = nome
        }else{
            throw new Error(`Nome inválido!`)
        }
        //email
        if(email.indexOf('@') > 0){
            this.email = email
        }else{
            throw new Error(`Email inválido`)
        }
        //idade
        if(typeof idade == 'number' && idade > 0 && idade < 130){
            this.idade = idade
        }else{
            throw new Error(`Idade inválida`)
        }
        //cpf
        if(cpf.length == 14){
            this.cpf = cpf
        }else{
            throw new Error(`Cpf inválido`)
        }
        //data_cadatro - usei o moment para modificar a data.
        this.data_cadastro = moment(new Date()).format('DD/MM/YYYY')
    }
    adiciona(db,paciente,res){
        //parte sqlite -
        const sqlite = `INSERT INTO Paciente(nome,email,idade,cpf,DATA_CADASTRO)
        VALUES(?,?,?,?)`
        //pegando os devidos dados e fazer uma rapida verificação:
        const nomePaciente =  paciente.nome.length >= 4
        const emailPaciente = paciente.email.indexOf('@') > 0
        const idadePaciente = typeof(paciente.idade) == 'number'
        const cpfPaciente = paciente.cpf.length == 14

        //Fiz um objeto e juntei tudo para fazer um conjunto de validação.
        const validacoes = [
            {
                nome : "nome",
                valido : nomePaciente,
                mensagem : "Nome deve ser maior que 4 letras"
            },
            {
                nome : "email",
                valido : emailPaciente,
                mensagem : "Email precisa ter @"
            },
            {
                nome : "idade",
                valido : idadePaciente,
                mensagem : "Idade precisa ser um numero."
            },
            {
                nome : "cpf",
                valido : cpfPaciente,
                mensagem : "Precisa conter 14 digitos totais: contando com . e -"
            }
        ]
        //está parte retorna o objeto que está errado.
        const existemErros = validacoes.filter( val => !val.valido)
        //Caso exista algum erro, ele retornará um array de erros.
        if(existemErros.length > 0){
            res.status(400).json(existemErros)
        }else{
            //comando run no Data Base.
            /* db.run(sqlite,) */
            res.status(201).send('funciona!')
        }
    }
}
//Exportando
module.exports = Paciente;