const moment = require('moment')
class Paciente{
    //Fazendo a devida validação
    constructor(nome,email,idade,cpf){
        if(nome.length >= 4){
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
}
//Exportando
module.exports = Paciente;