const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Tron101 the BOSS GURU FINAL is AWS and Git for DevOps example-FULL PIPELINE TEST'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
