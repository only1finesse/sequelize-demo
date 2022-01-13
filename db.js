const { Sequelize, DataTypes, Model } = require('sequelize'); 

//create instance of database 

const db = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './game_inventory.sqlite', 
    logging: false
})

//export database as well as datatypes and models since we are using it elsewhere in the app
module.exports = { db, DataTypes, Model }