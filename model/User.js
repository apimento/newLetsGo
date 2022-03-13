const mongoose = require("mongoose");  

const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({ 

    firstName: { 
        type: String, 
        required: true, 
        minlength: [3, "First Name must be more than 3 characters"],
        maxlength: [99, ""]
    }, 
    lastName: { 
        type: String, 
        required: true, 
        minlength: [3, "Last Name must be more than 3 characters"],
        maxlength: [99, ""]
    },  
    emailAddress: { 
        type: String, 
        required: true, 
        lowercase: true, 
        unique: true
    },
    password:{
        type: String, 
        required: true, 
        minlength: [8, "Must be at least 8 characters long"]

    }      

    //userRole: { 
        //type: String 
        //enum: ["admin","regular","superAdmin"],
        //default:"regular"
    //}

}
, 
    {
    timestamps: true
    })  

    //verifyPassword 
    userSchema.methods.verifyPassword = function(password){ 
        //method to compare(verify)password.. pass entered and pass in db
        return bcrypt.compareSync(password, this.password)
    }

const User = mongoose.model("User", userSchema); 

module.exports = User; 