const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hi!!! This is the real world. Follow the white rabbit.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
