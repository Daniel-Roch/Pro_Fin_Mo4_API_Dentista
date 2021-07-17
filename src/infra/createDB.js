//Vou criar meu banco de dados através daqui.
const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('database.db')

//-----------------------------
const TABELA_PACIENTE = `
CREATE TABLE if not exists "Paciente" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(50) not null,
    "EMAIL" varchar(100),
    "IDADE" tinyint not null,
    "CPF" VARCHAR(20) not null,
    "DATA_CADASTRO" DATETIME
);`;

function criarTabela(){
    db.run(TABELA_PACIENTE, (erro)=>{
        if(erro){
            console.log("[ERRO] : Criação de tabela.")
        }else{
            console.log('Tabela criada com sucesso!')
        }
    })
}

db.serialize( ()=> {
    criarTabela();
});