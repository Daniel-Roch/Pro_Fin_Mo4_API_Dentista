//criando o arquivo para menos processamento de ficar toda hora criando tabela.
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database.db');
//Processamento de sinal - quando eu reinincio o processo ele fala, e quando eu fecho ele também fala
process.on('SIGINT', () =>
    db.close(() => {
        console.log('[DB]: Closed');
        process.exit(0);
    })
);

module.exports = db;