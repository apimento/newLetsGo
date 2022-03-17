const Workout = require("../model/Workout")    

exports.exercise_show_get = (req,res) => { 
    // console.log(req.query.id);
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
    // console.log(req.body.id);
    let workout = await Workout.findById(req.params.id)
    await workout.exercises.push(req.body); 
    await workout.save(); 
    await res.redirect(`/day/allExercises?id=${req.params.id}`);
};

exports.exercise_delete = async (req,res) => {  
    let workout = await Workout.findById(req.params.w_id)
    // console.log(workout)   
    let exercise = workout.exercises.findIndex(ex => ex.id == req.params.e_id)
    // if (exercise < 0) throw new Error('Exercise not found')

    let deletedExercise = workout.exercises.splice(exercise, 1)
    console.log(deletedExercise) 

    await workout.save(); 
    res.redirect(`/day/allExercises?id=${req.params.w_id}`);
}   

exports.exercise_edit_get = async (req,res) => { 
    let workout = await Workout.findById(req.params.w_id) 
    let exercise = await workout.exercises.find(ex => ex.id == req.params.e_id) 
    // console.log(exercise);
    await res.render("day/editExercise" , {workout , exercise })
} 

exports.exercise_edit_put = async (req,res) => { 
    let workout = await Workout.findById(req.params.w_id)  
    console.log(workout); 
    let tempExerciseId = req.params.e_id 
    let exercise = await workout.exercises.findIndex(ex => ex.id == req.params.e_id)   
    workout.exercises.splice(exercise, 1)
    //saves new id to exercise data 
    req.body._id= tempExerciseId
    workout.exercises.push(req.body);
    // await exercise.save();  
    await workout.save();
    res.redirect(`/day/allExercises?id=${req.params.w_id}`)
} 



//need acces to child doc 
//workout.findById use line 41 to fiter ex 
// use req.body to change info from exercis eexercise.name=req.body.name