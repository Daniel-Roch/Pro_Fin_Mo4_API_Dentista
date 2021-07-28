//no script coloquei o --ignore _test_ para ele ignorar esta pasta e não inicializar ou vê-la.
const request = require('supertest')
const app = require('../app')

//rota GET
describe('Testando rotas de Paciente',()=>{
    //rota GET
    it('GET /paciente/cpf', async ()=>{
        const response = await request(app)
            .get('/paciente/123.456.789-01')
            expect(response.statusCode).toEqual(200)
            expect(response.body).toHaveProperty('ID','NOME','EMAIL','IDADE','CPF','DATA_CADASTRO')
    })
    //Rota POST
    it('POST /paciente certo', async ()=>{
        const res = await request(app)
            .post('/paciente')
            .send({
                nome: "Fulano",
                email: "blabla@hotmail.com",
                idade: 30,
                cpf: "111.111.111-02"
            })
            expect(res.statusCode).toEqual(201)
            expect(res.body).toMatchObject({'Envio de dados': true})
    })
    //Rota PATCH - Alterar parcialmente
    it('Fazendo um PATCH - alteração parcial!', async ()=>{
        const res = await request(app)
        .patch('/paciente/111.111.111-02')
        .send({
            nome: "Ciclano"
        })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toMatchObject({ 'Dado alterado': 'nome' })
    })
    //Rota DELETE
    it('Delete /paciente/cpf certo',async ()=>{
        const res = await request(app)
        .delete('/paciente/111.111.111-01')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toMatchObject({ Delete: true })
    })
})