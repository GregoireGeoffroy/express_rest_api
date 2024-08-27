const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

app.use(cors());

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});
app.listen(process.env.PORT, () => console.log(`My first Express app - listening on port ${process.env.PORT}!`));
