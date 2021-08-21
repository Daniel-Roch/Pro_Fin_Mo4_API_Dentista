class PacienteDao{
    constructor(db){
        this.db = db
    }
    //Parte que mostra toda a tabela. // fazendo uma Promise para aguardar a reposta.
    getAllPaciente(){
        return new Promise((resolve,reject)=>{
            this.db.all('SELECT * FROM Paciente',(err,rows)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
            })
        })
    }
    //Retorna somente 1 encontrado
    getPaciente(cpf){
        return new Promise((resolve,reject)=>{
            //fazendo um get no banco de dados para pegar somente 1 resultado com aquele CPF
            this.db.get(`SELECT * FROM Paciente WHERE CPF = ?`, cpf, (erro,row)=>{
                if(erro){
                    reject(erro)
                }else{
                    if(row){
                        resolve(row)
                    }else{
                        reject({"CPF" : false})
                    }
                }
            })
        })
    }
    //Envio de dados ao Banco de dados.
    setPaciente(newPaciente){
        //Parte da promise para aguardar a reposta, e enviar caso sucess ou erro
        return new Promise((resolve,reject)=>{
            this.db.run(`INSERT INTO Paciente(nome,email,idade,cpf,DATA_CADASTRO)
            VALUES(?,?,?,?,?)`,
            [newPaciente.nome, newPaciente.email, newPaciente.idade, newPaciente.cpf, newPaciente.data_cadastro],
            (err)=>{
                if(err){
                    reject(err)
                }else{  
                    resolve({"Envio de dados" : true})
                }
            })
        })
    }
    //Deletando pelo cpf.
    setDeletePaciente(cpf){
        return new Promise((resolve, reject)=>{
            this.db.run(`DELETE FROM Paciente WHERE cpf = ?`,cpf,(erro)=>{
                if(erro){
                    reject({"Delete" : false, erro})
                }else{
                    resolve({"Delete" : true})
                }
            })
        })
    }
    //Fazer um path - Alterar parcialmente.
    //Vou aproveitar e validar aqui o nome que estará entrando para substituir.
    setPatchPaciente(cpf,body){
        return new Promise((resolve, reject)=>{
            //expressao Regular para validar cpf
            const regexCpf = /\d{3}\.\d{3}\.\d{3}\-\d{2}/g
            const regEmail = /\w\@.+(.com|.com.br)$/g
            //Recebendo nome, e validando.
            if(body.nome && body.nome.length >= 4){
                this.db.run(`UPDATE paciente SET nome = ? where cpf = ?`,[body.nome,cpf],(err)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve({"Dado alterado" : "nome"})
                    }
                })
            }else if(body.email && body.email.match(regEmail) != null){
                this.db.run(`UPDATE paciente SET email = ? where cpf = ?`,[body.email,cpf],(err)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve({"Dado alterado" : "email"})
                    }
                })
            }else if(body.idade && typeof body.idade == 'number'){
                this.db.run(`UPDATE paciente SET idade = ? where cpf = ?`,[body.idade,cpf],(err)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve({"Dado alterado" : "idade"})
                    }
                })
            }else if(body.cpf && body.cpf.match(regexCpf) != null){
                //Avaliar se deve ou não mudar o cpf, sendo ele único para não haver problema
                this.db.run(`UPDATE paciente SET cpf = ? where cpf = ?`,[body.cpf,cpf],(err)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve({"Dado alterado" : "cpf"})
                    }
                })
            }else{
                reject(`Envio inválido.`)
            }
        })
    }
    //Fazer um PUT - alterar Todo o campo. - Menos cpf
    setPutPaciente(cpf,body){
        const regEmail = /\w\@.+(.com|.com.br)$/g

        return new Promise((resolve,reject)=>{
            //Saber se está correto o que foi passado - Porém não pode alterar o cpf.
            const correto = body.nome && body.email 
            && body.idade && body.nome.length >= 4
            && body.email.match(regEmail) != null && typeof body.idade == 'number'
            if(correto){
                this.db.run(`UPDATE paciente SET nome = ?, email = ?,
                idade = ? where cpf = ?`,[body.nome, body.email, body.idade, cpf],(err)=>{
                    if(err){
                        reject({"Dados": body, "Atelração de dados" : false, err})
                    }else{
                        resolve({"Dados": body, "Atelração de dados" : true})
                    }
                })
            }else{
                reject(`Dados inválidos`)
            }
        })
    }
    //Fazer login
    getLoginPaciente(dados){
        //Pegando os dados e colocando separadamente dentro de uma array. (irão vir assim: (nome: email:))
        const dadosPaciente = dados.split(" ").map(a => a.substring(a.indexOf(":") + 1))

        //[Email@algo.com.br, 111.111.111-01]
        return new Promise((resolve,reject)=>{
            //fazendo um get no banco de dados para pegar somente 1 resultado com aquele CPF
            this.db.get(`SELECT * FROM Paciente WHERE EMAIL = ? AND CPF = ?`, dadosPaciente, (erro,row)=>{
                if(erro){
                    reject(erro)
                }else{
                    if(row){
                        resolve(row)
                    }else{
                        reject({"Dados" : false})
                    }
                }
            })
        })
    }
}
module.exports = PacienteDao