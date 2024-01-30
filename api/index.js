const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
    res.contentType = "text/plain";
    res.send("Hello World!");
    next();
});
