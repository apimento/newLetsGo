const express = require("express"); 
const { append } = require("express/lib/response");
const isLoggedIn = require("../help/isLoggedIn");

var methodOverride = require("method-override")

const router = express.Router();  

router.use(methodOverride('_method'))

router.use(express.urlencoded({extended: true})); 

const workoutCntrl = require("../controllers/workout"); 

router.get("/workout/allWorkouts", isLoggedIn , workoutCntrl.workout_index_get); 
router.get("/workout/addWorkout", isLoggedIn , workoutCntrl.workout_create_get);
router.post("/workout/addWorkout",isLoggedIn ,workoutCntrl.workout_create_post); 
router.get("/workout/allWorkouts/:id", isLoggedIn ,workoutCntrl.workout_show_get);  
router.delete("/workout/allWorkouts/delete/:id", isLoggedIn ,workoutCntrl.workout_delete); 
router.get("/workout/allWorkouts/edit/:id", isLoggedIn ,workoutCntrl.workout_edit_get); 
router.put("/workout/allWorkouts/update/:id", isLoggedIn ,workoutCntrl.workout_edit_put) 
router.get("/workout/commentsWorkout/:id" , isLoggedIn ,workoutCntrl.comments_show_get);

module.exports = router;