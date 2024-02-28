const mongoose = require('mongoose');
const validator = require('validator');

// schema
const schemaa = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 3,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate(emailValue) {
                if (!validator.isEmail(emailValue)) {
                    throw new Error("Invalid Email");
                }
            }
        },
        phone: {
            type: String,
            required: true,
            minLength: 11,
            maxLength: 11,
            required: true,
        },
        address: {
            type: String,
            required: true
        }

    }
);

//model 
const StudentsData = new mongoose.model("Student", schemaa);

// exporting this model
module.exports = StudentsData;
