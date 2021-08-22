//Vou criar meu banco de dados através daqui.
const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('database.db')

//-----------------------------
const TABELA_PACIENTE = `
CREATE TABLE if not exists "Paciente" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(50) not null,
    "EMAIL" varchar(100),
    "Data_Nascimento" DATE not null,
    "CPF" VARCHAR(20) not null,
    "ENDERECO" varchar(255) not null,
    "CIDADE" varchar(100) not null,
    "TELEFONE" varchar(100) not null,
    "DATA_CADASTRO" DATE
);`;

function criarTabela(){
    db.run(TABELA_PACIENTE, (erro)=>{
        if(erro){
            //caso a tabela não seja criada corretamente
            console.log("[ERRO] : Criação de tabela.")
        }
    })
}

db.serialize( ()=> {
    criarTabela();
});