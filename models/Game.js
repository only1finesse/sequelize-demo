const { db, DataTypes, Model } = require('../db');
const User = require('./User')

//create a game model ---> create a child class

class Game extends Model {}; 

//init to create a game table (model)

Game.init({
    name: DataTypes.STRING, 
    platform: DataTypes.STRING
}, {
    sequelize: db
})



module.exports = Game