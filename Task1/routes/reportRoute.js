const express = require("express");
const reportRoute = express.Router();

const lostRoute = require("./lostRoute");
const foundRoute = require("./foundRoute");

reportRoute.get("/main", (req, res) => {
    res.json({
        message: "Pls post ur report with the form of { name:    ,itemName:   ,itemColor:  ,type:(u find it {find} , u lost it {lost})} in /maain/1"
    });
});


reportRoute.use("/lost", lostRoute);
reportRoute.use("/found", foundRoute);

module.exports = reportRoute;