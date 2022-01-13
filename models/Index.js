const {Game} = require('./Game');
const {User} = require('./User');

Game.belongsTo(User)
User.hasMany(Game)

module.exports = {Game, User}
