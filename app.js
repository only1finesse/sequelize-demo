const express = require('express');
const User = require('./models/User');
const Game = require('./models/Game');
const { sequelize } = require('./db')
const seed = require('./seed');


const app = express()
const port = 3000;

app.use(express.json())

app.listen(port, async () => {
    // await seed()
    console.log(`Server is listening on http://localhost:${port}`)
})

app.get('/', async (req, res) => {
    res.send('<h1>Hello!<h1/>')
})

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.send(users.map(user => (`email: ${user.email}, password: ${user.password}`)))
})

app.get('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.json(user)
})

app.post('/users', async (req, res) => {
    const newUser = await User.create(req.body);
    res.send("Succesful")
})

app.put('/users/:id', async(req, res) => {
    const user = await User.update(req.body, {
        where: {id: req.params.id}
    }); 
    res.send(`user updated successfully`)
})

app.delete('/users/:id', async (req, res) => {
    const newUser = await User.destroy({ where: { id: req.params.id } });
    res.send(`deleted `)
})




