const express = require("express"); 
const { append } = require("express/lib/response");
const isLoggedIn = require("../help/isLoggedIn");

//after npm i method-override
var methodOverride = require("method-override")

const router = express.Router();  

//must be below initialization of router
router.use(methodOverride('_method'))

router.use(express.urlencoded({extended: true})); 

const workoutCntrl = require("../controllers/workout"); 

router.get("/workout/allWorkouts", workoutCntrl.workout_index_get); 



module.exports = router;