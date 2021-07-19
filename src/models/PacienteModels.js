class Paciente{
    //Parte que mostra toda a tabela.
    mostrar(db,res){
        db.all('SELECT * FROM Paciente',(err,rows)=>{
            if(err){
                throw new Error(`[ERRO]:${err}`)
            }else{
                res.status(200).json(rows)
            }
        })
    }
    adiciona(db,paciente,res){
        //parte sqlite -
        const sqlite = `INSERT INTO Paciente(nome,email,idade,cpf)
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
            res.json(existemErros)
        }else{
            //comando run no Data Base.
            /* db.run(sqlite,) */
            res.send('funciona!')
        }
    }
}
//Exportando
module.exports = new Paciente;