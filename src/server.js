const app = require('./app')

//Abrindo servidor.
app.listen(process.env.PORT || 3050,()=>{console.log('Port: http://localhost:3050')})