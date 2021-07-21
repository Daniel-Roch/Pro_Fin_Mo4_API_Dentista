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
}
module.exports = PacienteDao