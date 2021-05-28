const express = require('express');
const { propfind } = require('./routes');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333);