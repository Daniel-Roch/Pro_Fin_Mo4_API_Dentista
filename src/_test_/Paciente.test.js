const Paciente = require('../models/PacienteModels')

//Aplicando testes na criação de Paciente
describe('Test Create Paciente',()=>{
    it('Create Paciente',()=>{
        const newPaciente = new Paciente("João","abul@hotmail.com",30,'987.654.321-10')
        expect(newPaciente).toBeTruthy()
    })
})