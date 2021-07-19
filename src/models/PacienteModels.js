class Paciente{
    mostrar(db,res){
        db.all('SELECT * FROM Paciente',(err,rows)=>{
            if(err){
                throw new Error(`[ERRO]:${err}`)
            }else{
                res.status(200).json(rows)
            }
        })

    }
}
//Exportando
module.exports = new Paciente;