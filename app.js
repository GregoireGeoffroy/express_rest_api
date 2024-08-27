const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

app.use(cors());

app.get("/", (req, res) => res.send("Hello, world!"));

app.listen(process.env.PORT, () => console.log(`My first Express app - listening on port ${process.env.PORT}!`));
