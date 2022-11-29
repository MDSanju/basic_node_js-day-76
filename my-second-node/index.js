const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World... From the node setup second time!');
});

const users = [
    {id: 0, name: 'Kayel', email: 'kayel@gmail.com', phone: '01785414415'},
    {id: 1, name: 'Bob', email: 'bob@gmail.com', phone: '01785414416'},
    {id: 2, name: 'John', email: 'john@gmail.com', phone: '01785414417'},
    {id: 3, name: 'Messin', email: 'messin@gmail.com', phone: '01785414418'},
    {id: 4, name: 'Ally', email: 'ally@gmail.com', phone: '01785414419'},
    {id: 5, name: 'Robert', email: 'robert@gmail.com', phone: '01785414410'},
    {id: 6, name: 'Mark', email: 'mark@gmail.com', phone: '01785414411'},
    {id: 7, name: 'Devid', email: 'devid@gmail.com', phone: '01785414412'},
    {id: 8, name: 'Armast', email: 'armast@gmail.com', phone: '01785414413'}
];

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users);    
    }
    
});

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting the post', req.body);
    res.json(newUser);
});

// dynamic API
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'apple', 'blackberry']);
});

app.get('/fruits/mangoes/red', (req, res) => {
    res.send('WOW...! Nice Mango!!!');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});