const Workout = require("../model/Workout")  

exports.exercise_show_get = (req,res) => { 
    console.log(req.query.id);
    Workout.findById(req.query.id)
    .then(workout =>{ 
        res.render("day/allExercises", {workout})
    })
    .catch(err=> { 
        console.log(err);
    });
}; 

exports.exercise_add_get = (req, res) => { 
    res.render('day/addExercise',{id:req.query.id})
}  

exports.exercise_add_post = async (req,res) => { 
    let workout = await Workout.findById(req.body.id)
    workout.exercises.push(req.body); 
    workout.save(); 
    res.redirect(`/day/allExercises?id=${req.body.id}`)
};