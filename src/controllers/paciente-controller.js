//Exportando a rota - e recebendo o parametro app.
module.exports = (app,db) =>{
    app.get('/paciente',(req,res)=>{
        res.status(200).json({"Sucess": true})
        console.log(db)
    })
}