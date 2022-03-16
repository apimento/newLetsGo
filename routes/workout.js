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
router.get("/workout/addWorkout",workoutCntrl.workout_create_get);
router.post("/workout/addWorkout",workoutCntrl.workout_create_post); 
router.get("/workout/allWorkouts/:id", workoutCntrl.workout_show_get);  
router.delete("/workout/allWorkouts/delete/:id", workoutCntrl.workout_delete); 
router.get("/workout/allWorkouts/edit/:id", workoutCntrl.workout_edit_get); 
router.put("/workout/allWorkouts/update/:id", workoutCntrl.workout_edit_put) 
router.get("/workout/commentsWorkout:id" , workoutCntrl.comments_view_get);

module.exports = router;