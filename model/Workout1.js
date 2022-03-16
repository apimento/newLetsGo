const mongoose = require("mongoose");  

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: String,  
    //not sure if better UX to have one list, with checkboxes, or the three seperate inputs
    targetMuscleGroups1: {type: String, enum: ['Legs','Chest', 'Shoulders', 'Back', 'Arms', 'Core', 'Cardio', '- - -', 'Calves', 'Quads', 'Hamstrings', 'Glutes', 'Obliques', "Abs", 'Biceps', 'Triceps', 'Traps', 'Delts', 'Lats']},
    targetMuscleGroups2: {type: String, enum: ['  ','Legs','Chest', 'Shoulders', 'Back', 'Arms', 'Core', 'Cardio', '- - -', 'Calves', 'Quads', 'Hamstrings', 'Glutes', 'Obliques', "Abs", 'Biceps', 'Triceps', 'Traps', 'Delts', 'Lats']},
    targetMuscleGroups3: {type: String, enum: ['  ','Legs','Chest', 'Shoulders', 'Back', 'Arms', 'Core', 'Cardio', '- - -', 'Calves', 'Quads', 'Hamstrings', 'Glutes', 'Obliques', "Abs", 'Biceps', 'Triceps', 'Traps', 'Delts', 'Lats']},
    sets: Number, 
    reps: Number, 
    weight: Number, 
    weightUom: {type: String, default:'lbs', enum: ['lbs' , 'kg']}, 
    equipmentUsed: String, 
    comments: String
  });

const workoutSchema = new Schema({
    date: Date, 
    targetMuscleGroups1: {type: String, enum: ['Legs','Chest', 'Shoulders', 'Back', 'Arms', 'Core', 'Cardio', '- - -', 'Calves', 'Quads', 'Hamstrings', 'Glutes', 'Obliques', "Abs", 'Biceps', 'Triceps', 'Traps', 'Delts', 'Lats']},
    targetMuscleGroups2: {type: String, enum: ['  ','Legs','Chest', 'Shoulders', 'Back', 'Arms', 'Core', 'Cardio', '- - -', 'Calves', 'Quads', 'Hamstrings', 'Glutes', 'Obliques', "Abs", 'Biceps', 'Triceps', 'Traps', 'Delts', 'Lats']},
    targetMuscleGroups3: {type: String, enum: ['  ','Legs','Chest', 'Shoulders', 'Back', 'Arms', 'Core', 'Cardio', '- - -', 'Calves', 'Quads', 'Hamstrings', 'Glutes', 'Obliques', "Abs", 'Biceps', 'Triceps', 'Traps', 'Delts', 'Lats']},
    lengthOfWorkout: {type: Number, min: 5, max: 999},
    rating: {type: Number, min: 1, max: 10}, 
    comments: String,
    exercises:[exerciseSchema],
  });



const Workout = mongoose.model("Workout", workoutSchema);    


module.exports = Workout; 