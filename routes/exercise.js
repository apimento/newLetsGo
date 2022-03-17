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

router.get("/day/allExercises",isLoggedIn ,exerciseCntrl.exercise_show_get); 
router.get("/day/addExercise",isLoggedIn ,exerciseCntrl.exercise_add_get);  
router.post("/day/addExercise/:id",isLoggedIn ,exerciseCntrl.exercise_add_post); 
router.delete("/day/allExercises/delete/:w_id/:e_id", isLoggedIn ,exerciseCntrl.exercise_delete); 
router.get("/day/allExercises/edit/:w_id/:e_id", isLoggedIn ,exerciseCntrl.exercise_edit_get);  
router.put("/day/allExercises/update/:w_id/:e_id", isLoggedIn ,exerciseCntrl.exercise_edit_put);


module.exports = router;