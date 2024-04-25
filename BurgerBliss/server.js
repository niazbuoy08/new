const express = require("express");

const Burger = require('./models/burgermodel');

const db = require("./db.js");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.get("/getburgers", (req, res) => {
    Burger.find({})
        .then(docs => {
            res.send(docs);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Internal Server Error");
        });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
