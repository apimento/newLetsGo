const User = require("../model/User");
const Workout = require("../model/Workout") 

exports.workout_index_get = (req,res) => { 
    User.findById(req.user.id).populate("workouts")
    .then(user => {  
        console.log(user)
        res.render("workout/allWorkouts", {workouts : user.workouts})
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
    .then(async() => { 
        let user = await User.findById(req.user);
        user.workouts.push(workout.id);
        await user.save()
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

exports.comments_show_get = (req , res) => { 
    Workout.findById(req.params.id) 
    .then((workout) => { 
        res.render("workout/commentsWorkout", {workout} )
    }) 
    .catch(err=> { 
        console.log(err)
    })
}