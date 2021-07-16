//Exportando a rota - e recebendo o parametro app.
module.exports = app =>{

    app.get('/paciente',(req,res)=>{
        res.send('tudo certo')
    })
}