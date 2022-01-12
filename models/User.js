const { db, DataTypes, Model } = require('../db'); 

class User extends Model {}

User.init({
    email: DataTypes.STRING, 
    password: DataTypes.STRING
}, {
    sequelize: db
})

module.exports = User