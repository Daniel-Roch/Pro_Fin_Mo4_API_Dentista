const moment = require('moment')
class Paciente{
    //Fazendo a devida validação
    constructor(nome,email,data_nascimento,cpf,endereco,cidade,telefone){
        if(nome.length >= 4){
            this.nome = nome
        }else{
            throw new Error(`Nome inválido!`)
        }
        //email
        //utilizei uma REGEXP para validar email.
        const regEmail = /\w\@.+(.com|.com.br)$/g
        if(email.match(regEmail) != null){
            this.email = email
        }else{
            throw new Error(`Email inválido`)
        }
        //data_nascimento
        this.data_nascimento = data_nascimento
        //cpf
        //utilizei uma REGEXP para validar cpf.
        const regexCpf = /\d{3}\.\d{3}\.\d{3}\-\d{2}/g
        if(cpf.match(regexCpf) != null){
            this.cpf = cpf
            //Implementar no telefone e agora no cpf.
            /* const num = '(00)00000-0000'
            const re = /\(\d\d\)\s?\d{5}\-?\d{4}/g
            console.log(num.match(re)) */
        }else{
            throw new Error(`Cpf inválido`)
        }
        //endereco
        this.endereco = endereco
        //cidade
        this.cidade = cidade
        //telefone
        this.telefone = telefone
        //data_cadatro - usei o moment para modificar a data.
        this.data_cadastro = moment().format('DD/MM/YYYY')
    }
}
//Exportando
module.exports = Paciente;