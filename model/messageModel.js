const {Sequelize,DataTypes} = require('sequelize');

const dbConnection = require('../config/dbConfig');

const Message = dbConnection.define('message',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    message_text:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports= Message;