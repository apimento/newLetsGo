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

exports.workout_create_post = (req, res) => { 
    console.log(req.body); 
    let workout = new Workout(req.body)
    workout
    .save() 
    .then(()=>{ 
        res.redirect('/workout/allWorkouts');
    })
    .catch((err)=> { 
        console.log(err); 
        res.send("ERROR!")
    }) 

};  

exports.workout_create_get = (req, res) => { 
    Workout.find()
    .then(()=> { 
        res.render('workout/addWorkout');
    })
    .catch((err) => { 
        console.log(err);
    })
 }