const express = require("express");  
const router = express.Router();  
const { append } = require("express/lib/response");
const isLoggedIn = require("../help/isLoggedIn");

//after npm i method-override
var methodOverride = require("method-override")

//must be below initialization of router
router.use(methodOverride('_method'))

router.use(express.urlencoded({extended: true}));  

const exerciseCntrl = require("../controllers/exercise"); 

router.get("/day/allExercises",exerciseCntrl.exercise_show_get); 
router.get("/day/addExercise",exerciseCntrl.exercise_add_get);  
router.post("/day/addExercise/:id",exerciseCntrl.exercise_add_post); 
router.delete("/day/allExercises/delete/:w_id/:e_id", exerciseCntrl.exercise_delete);

module.exports = router;