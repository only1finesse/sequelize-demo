// import dependencies that help parse json file
const path = require('path'); 
const fs = require('fs').promises // help to resolve/reject promises
const { db } = require('./db'); 
const Game = require('./models/Game')
const User = require('./models/User')

// define seed function 
const seed = async () => {
    //clear out tables to prevent making duplicate data
    await db.sync({force: true});

    // find the .json file and parse data to be able to convert to a js object
    // This makes it easy to access the array.... creating a new row with each element of the array
    const seedPath = path.join(__dirname, 'games.json');
    

    const seedPath2 = path.join(__dirname, 'users.json')
    
    const buffer = await fs.readFile(seedPath)
    const buffer2 = await fs.readFile(seedPath2) //reads information existing in the defined path
    const {data} = JSON.parse(String(buffer))
    const {userdata} = JSON.parse(String(buffer2)) //converts JSONstring to JS object

    const gamePromises = data.map(game => Game.create(game))

    const userPromises = userdata.map(user => User.create(user))

    await Promise.all(gamePromises)
    await Promise.all(userPromises) // this method takes in an iterable of promises as an input and returns a single promise that resolves or rejects

    console.log(`All games have been populated into the database`)
    console.log(`All users have been populated into the database`)

}

// invoke seed function 
seed();

//export seed function
module.exports = seed