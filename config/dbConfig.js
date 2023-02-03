const {Sequelize} = require("sequelize");

const dbConnection = new Sequelize('chitchatdb','root','root123',{
    dialect:'mysql',
    host : 'localhost'
})

module.exports = dbConnection;