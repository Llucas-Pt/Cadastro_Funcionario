/* const { Sequelize } = require("sequelize");

const DBanco = new Sequelize('Cadastro', 'root', 'senh@987654321', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = DBanco;*/

const { Sequelize } = require("sequelize");

// Conexão SQLite local (vai criar o arquivo Cadastro.sqlite no seu diretório)
const DBanco = new Sequelize({
    dialect: 'sqlite',
    storage: './Cadastro.sqlite',  // Caminho do arquivo SQLite que será criado
    logging: console.log
});

module.exports = DBanco;
