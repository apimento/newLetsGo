const express = require("express");

const mongoose = require ("mongoose");   

require('dotenv').config() 

const flash = require("connect-flash");

const expressLayouts = require("express-ejs-layouts"); 

const PORT = process.env.PORT;

const app = express();    

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(expressLayouts); 

let session = require('express-session'); 
let passport = require("./help/ppConfig"); 


app.use(session({
   secret: process.env.secret, 
   saveUninitialized: true, 
   resave: false,  
   cookie: {maxAge: 360000}
})) 

app.use(passport.initialize()); 
app.use(passport.session());  

app.use(flash());

app.use(function(req, res, next){ 
    res.locals.currentUser = req.user; 
    res.locals.alerts = req.flash();
    next();
})

const authRoutes = require("./routes/auth"); 
const indexRoute = require("./routes/index");  
const workoutRoute = require("./routes/workout"); 
const exerciseRoute = require("./routes/exercise"); 

app.use('/', authRoutes); 
app.use('/', indexRoute); 
app.use('/', workoutRoute); 
app.use('/', exerciseRoute);

app.set("view engine", "ejs");

mongoose.connect(process.env.mongoDBURL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
},
()=> { 
    console.log("mongodb connected successfully!");
});

app.listen(PORT, ()=> console.log(`App is running on ${PORT}`)); 
