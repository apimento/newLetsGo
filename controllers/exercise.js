exports.exercise_show_get = (req,res) => { 
    console.log(req.query.id);
    Workout.findById(req.query.id)
    .then(workout =>{ 
        res.render("/day/allExercises")
    })
    .catch(err=> { 
        console.log(err);
    });
};