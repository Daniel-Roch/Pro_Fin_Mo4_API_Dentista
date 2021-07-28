const app = require('./app')

//-> Link Heroku: https://projeto-dentista-api-m4.herokuapp.com/paciente

//Abrindo servidor.
app.listen(process.env.PORT || 3050,()=>{console.log('Port: http://localhost:3050')})