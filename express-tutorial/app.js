const express = require('express');
const session = require('express-session');
const passport = require('passport');
const local = require('./strategies/local');

const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');
const authRoute = require('./routes/auth');
const store = new session.MemoryStore();
const app = express();


app.use(session({
    secret: 'Some secret',
    cookie: { maxAge: 30000 },
    resave: true,
    saveUninitialized: true,
    store
}))
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    console.log(store);
    console.log(`${req.method} - ${req.url}`);
    next();
});

app.use(passport.initialize());
app.use(passport.session());

app.use('/users', usersRoute);
app.use('/posts', postsRoute);
app.use('./auth', authRoute);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

/*
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
    title: 'My favorite foods'
},
{
    title: 'My favorite games'
}
]



app.get('/', (req, res) => { //especifica um novo caminho
    res.send({ //Manda uma resposta ao usuário
        msg: 'Hello!',
        user: {}
    });
});
app.post('/', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).send('Created User');
})
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

app.post('/posts', (req, res) => {
    const {
        authorization
    } = req.headers;
    if (authorization && authorization === '123') {
        const post = req.body;
        console.log(post);
        posts.push(post);
        res.status(201).send(post);
    } else {
        res.status(403).send('Forbidden');
    }
})

function validateCookie(req, res, next) {
    const { cookies } = req;
    if ('sessionID' in cookies) {
        console.log('Session ID Exist.');
        if (cookies.sessionID === '123456') next();
        else (res.status(403).send({ msg: 'Not Authenticated' }));
    } else (res.status(403).send({ msg: 'Not Authenticated' }));



}

app.get('/signin', (req, res) => {
    res.cookie('sessionID', '123456');
    res.status(200).json({ msg: 'Logged In' });
})

app.get('/protected', validateCookie, (req, res) => {
    res.status(200).json({ msg: 'You are Authorized' })
});

app.post('/login', (req, res) => {
    console.log(req.sessionID);
    const { username, password } = req.body;
    if (username && password) {
        if (req.session.authenticated) {
            res.json(req.session);
        }
        else {
            if (password === '123') {
                req.session.authenticated = true;
                req.session.user = {
                    username, password
                };
                res.json(req.session);

            }
            else {
                res.status(403).json({ msg: 'Bad Credentials' });
            }
        }
    } else { res.status(403).json({ msg: 'Bad Credentials' }); }
    res.status(200);
});
*/
