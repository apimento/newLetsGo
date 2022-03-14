const Workout = require("../model/Workout") 

exports.workout_index_get = (req,res) => { 
    Workout.find() 
    .then(workouts => { 
        res.render("workout/allWorkouts", {workouts : workouts})
    })
    .catch(err => { 
        console.log(err);
    })
};