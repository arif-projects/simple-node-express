const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json());
const port = process.env.port || 5000;



app.get('/', (req, res) => {
    res.send('20000')
});//get = data read

const users = [
    {
        id: 0,
        name: 'Mohammad Arif',
        department: 'Computer Science',
        batch: '5th',
        emali: 'arif.redoy603@gmail.com'
    },
    {
        id: 1,
        name: 'Mohammad Arif',
        department: 'Computer Science',
        batch: '5th',
        emali: 'arif.redoy603@gmail.com'
    },
    {
        id: 2,
        name: 'Mohammad Shorif',
        department: 'Computer Science',
        batch: '5th',
        emali: 'Shorif.redoy603@gmail.com'
    },
    {
        id: 3,
        name: 'Mohammad Arif',
        department: 'Computer Science',
        batch: '5th',
        emali: 'arif.redoy603@gmail.com'
    }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

})

// app method 
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send('inside post');
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.listen(port, () => {
    console.log('Done', port);
})