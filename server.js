//after npm i express
const express = require("express");
//after npm i mongoose
const mongoose = require ("mongoose");   
//after npm i dotenv 
//when in group.. each member has unique env files
require('dotenv').config() 
//after npm i connect-flash 
const flash = require("connect-flash");

//after npm i express-ejs-layouts
const expressLayouts = require("express-ejs-layouts"); 

//port location hidden here.. moved into .env
const PORT = process.env.PORT;

const app = express();    

app.use(express.urlencoded({ extended: true }));

//look for statioc files (CSS,JS,images,audio etc) 
app.use(express.static("public"));

// const expressLayouts=require('express-ejs-layouts');

app.use(expressLayouts); 

//after npm i express-session
let session = require('express-session'); 
let passport = require("./help/ppConfig"); 


app.use(session({
    //value kept in .env
   secret: process.env.secret, 
   //if new session, save session info in browser
   saveUninitialized: true, 
   //do not save if modified
   resave: false,  
   //cookies will expire after: 
   cookie: {maxAge: 360000}
})) 

app.use(passport.initialize()); 
app.use(passport.session());  

app.use(flash());

//sharing all info with all pages 
app.use(function(req, res, next){ 
    //locals shares info with all pages
    res.locals.currentUser = req.user; 
    res.locals.alerts = req.flash();
    next();
})

//anything used by routes must be before this
//import route

const authRoutes = require("./routes/auth"); 
const indexRoute = require("./routes/index");  
const workoutRoute = require("./routes/workout");

//mount route
app.use('/', authRoutes); 
app.use('/',indexRoute); 
app.use('/',workoutRoute);

//nodejs to look in views folder for all ejs files  
//will always look for folder called "views" (convention)
app.set("view engine", "ejs");

//connection string cut and pasted to .env
mongoose.connect(process.env.mongoDBURL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
},
()=> { 
    console.log("mongodb connected successfully!");
});

app.listen(PORT, ()=> console.log(`App is running on ${PORT}`)); 
