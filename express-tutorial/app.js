const express = require('express');
const app = express();


const users = [{ //Guarda todos os nome e idades no objeto "users"
        name: 'Anson',
        age: 22
    },
    {
        name: 'Kelvin',
        age: 25
    },
    {
        name: 'Davizaun',
        age: 20
    }
];
const posts = [{ //Guarda os títulos abaixo no objeto "posts"
    title: 'My favorite foods'},
    {title: 'My favorite games'
}]



app.get('/', (req, res) => { //especifica um novo caminho 
    res.send({ //Manda uma resposta ao usuário
        msg: 'Hello!',
        user: {}
    });
});
app.get('/users', (req, res) => {
    res.status(200).send(users); //mostra os usuários 
});
app.get('/users/:name', (req, res) => {
    const {
        name
    } = req.params;
    const user = users.find((user) => user.name === name); // cria o objeto user e o atrela ao objeto users
    if (user) {
        res.status(200).send(user); //prova pra ver se o usuario existe
    } else res.status(404).send('Not Found');


})
app.get('/posts', (req, res) => {
    console.log(req.query);
    const {
        title
    } = req.query;
    if (title) {
        const post = posts.find((post) => post.title === title);
        if (post) res.status(200).send(post);
        else res.status(200).send(posts);
    }
    res.status(200).send(posts);

})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});