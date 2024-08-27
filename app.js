const express = require("express");
const models = require("./models");
const app = express();
const cors = require("cors");
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

app.get('/users', (req, res) => {
  return res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});

app.post('/messages', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
  };

  messages[id] = message;

  return res.send(message);
});

app.listen(process.env.PORT, () => console.log(`My first Express app - listening on port ${process.env.PORT}!`));
