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
    let workout = new Workout(req.body);

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
        res.render('workout/addWorkout')
} 

exports.workout_show_get = (req, res) => { 
     Workout.findById(req.params.id)
     .then((workout) => { 
        res.render("day/allExercises", {workout})
     }
)} 

exports.workout_delete = (req,res) => { 
    Workout.findByIdAndDelete(req.params.id)
    .then(() => {
       res.redirect("/workout/allWorkouts")  
    })
    .catch(err=> { 
        console.log(err)
    })
}   

exports.workout_edit_get = (req,res) => { 
    Workout.findById(req.params.id) 
    .then((workout) => { 
        res.render("workout/editWorkout",  {workout} )
    }) 
    .catch(err=> { 
        console.log(err)
    })
} 

exports.workout_edit_put = (req,res) => { 
    Workout.findByIdAndUpdate(req.params.id, req.body) 
    .then(()=> { 
        res.redirect("/workout/allWorkouts")
    }) 
    .catch(err => { 
        console.log(err);
    })
}

exports.comments_view_get = (req , res) => { 
    Workout.findById(req.params.id) 
    then((workout) => { 
        res.render("workout/commentsWorkout", {workout} )
    }) 
    .catch(err=> { 
        console.log(err)
    })
}