class Paciente{
    mostrar(db,res){
        res.status(200).json({"Sucess": true})
        console.log(db)
    }
}
//Exportando
module.exports = new Paciente;