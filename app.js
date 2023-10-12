const dotenv = require("dotenv")
const mongoose = require('mongoose')
const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express()


dotenv.config({ path: "./config.env" })
require('./db/connection')
const PORT = process.env.PORT ;

//express json format
app.use(express.json());

// handlebars set
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));


// path-define

const static_path = path.join(__dirname, "./public");
const views_path = path.join(__dirname, "./views");

app.use(express.static(static_path));
app.set("views",views_path)

//acquring router authentication
app.use(require('./router/auth'))

//acquire user through model
const User = require('./models/child-schema')
const User2 = require('./models/parent-schema')
const User3 = require('./models/doctor-schema')


//middleware
const middleware = ((req, res, next) => {
  console.log("middleware")
  next()
})


// filesroute

app.get("/git", (req, res) => {
  res.render("git")
})

app.get("/child-register", (req, res) => {
  res.render("child-register")

})


app.get("/child-login", (req, res) => {
  res.render("child-login")

})

app.get("/parent-register", (req, res) => {
  res.render("parent-register")

})

app.get("/parent-login", (req, res) => {
  res.render("parent-login")

})


app.get("/doctor-register", (req, res) => {
  res.render("doctor-register")

})

app.get("/doctor-login", (req, res) => {
  res.render("doctor-login")

})


// app.get('/', (req, res) => {
//   res.send('Hello HOMEPAGE from the backend!')
// })

// app.get('/about', middleware, (req, res) => {
//   res.send('Hello About from the backend!')
// })

app.get('/login', (req, res) => {
  res.send('Hello LOGIN from the backend!')

})

app.get("/child-page", (req, res) => {
  res.render("child-page")
})

// app.get('/register', (req, res) => {
//   res.send('Hello REGISTER from the backend!')
// })



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})