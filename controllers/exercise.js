const Workout = require("../model/Workout")    

exports.exercise_show_get = (req,res) => { 
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
    let workout = await Workout.findById(req.params.id)
    await workout.exercises.push(req.body); 
    await workout.save(); 
    await res.redirect(`/day/allExercises?id=${req.params.id}`);
};

exports.exercise_delete = async (req,res) => {  
    let workout = await Workout.findById(req.params.w_id) 
    let exercise = workout.exercises.findIndex(ex => ex.id == req.params.e_id)

    let deletedExercise = workout.exercises.splice(exercise, 1)
    console.log(deletedExercise) 

    await workout.save(); 
    res.redirect(`/day/allExercises?id=${req.params.w_id}`);
}   

exports.exercise_edit_get = async (req,res) => { 
    let workout = await Workout.findById(req.params.w_id) 
    let exercise = await workout.exercises.find(ex => ex.id == req.params.e_id) 
    await res.render("day/editExercise" , {workout , exercise })
} 

exports.exercise_edit_put = async (req,res) => { 
    let workout = await Workout.findById(req.params.w_id)  
    console.log(workout); 
    let tempExerciseId = req.params.e_id 
    let exercise = await workout.exercises.findIndex(ex => ex.id == req.params.e_id)   
    workout.exercises.splice(exercise, 1)
    req.body._id= tempExerciseId
    workout.exercises.push(req.body);
    await workout.save();
    res.redirect(`/day/allExercises?id=${req.params.w_id}`)
} 