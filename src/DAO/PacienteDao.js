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
}
module.exports = PacienteDao