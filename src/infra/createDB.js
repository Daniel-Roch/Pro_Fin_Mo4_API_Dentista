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
            //caso a tabela não seja criada corretamente
            console.log("[ERRO] : Criação de tabela.")
        }
    })
}

db.serialize( ()=> {
    criarTabela();
});

//Processamento de sinal - quando eu reinincio o processo ele fala, e quando eu fecho ele também fala
process.on('SIGINT', () =>
    db.close(() => {
        console.log('[DB]: Closed');
        process.exit(0);
    })
);

module.exports = db;