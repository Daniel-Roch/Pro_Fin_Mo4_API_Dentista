const Paciente = require('../models/PacienteModels')

//comando para ignorar o api.test.js e somente executar o que você gostaria: 
//npm run test -t Paciente.test.js

//Aplicando testes na criação de Paciente
describe('Test Create Paciente',()=>{
    it('Create Paciente',()=>{
        const newPaciente = new Paciente("João","abul@hotmail.com.br",30,'987.654.321-10')
        expect(newPaciente).toBeTruthy()
    })
})