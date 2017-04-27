const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const calc = require('./calc');

app.get('/', (req, res) => {
  res.send("<h1>silly calculator API</h1>");
});

app.get('/add/:a/:b', (req, res) => {
  res.send({
    result: calc.add(Number(req.params.a), Number(req.params.b))
  });
});




app.listen(port);
console.log(`🌍 Web Application is started - listening on ${port}`);