const express = require("express"); 
const { append } = require("express/lib/response");
const isLoggedIn = require("../help/isLoggedIn");

//after npm i method-override
var methodOverride = require("method-override")

const router = express.Router();  

//must be below initialization of router
router.use(methodOverride('_method'))

router.use(express.urlencoded({extended: true}));  

const exerciseCntrl = require("../controllers/exercise") 

router.get("/day/allExercises".exerciseCntrl.exercise_show_get);