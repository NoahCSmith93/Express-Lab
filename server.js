// Load express
const express = require("express")
const path = require("path")

// Food faux database
const foodDb = require("./data/food-db")

// Variable for the express app
const app = express()

// App configuration
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// Root route
app.get("/", function (req, res) {
    res.redirect("/foods")
})

// Home route
app.get("/home", function(req, res) {
    res.render("home")
})

// Foods route
app.get("/foods", function(req, res) {
    const foods = foodDb.getAll()
    res.render("foods/index", { foods })
})

// Listen on port 3000
app.listen(3000, function () {
    console.log("Listening on port 3000")
})
