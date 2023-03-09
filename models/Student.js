import mongoose, { Schema, ObjectId } from "mongoose";
import isEmail from "validator/lib/isEmail.js";

export default mongoose.model('Student', 
    new Schema({
        id: { type: ObjectId },
        name: {
            type: String,
            required: true,
            //model validation
            validate: {
                validator: (name) => name.length > 3,
                message: 'Name must be at least 3 characters'
            }
        },
        email: {
            type: String,
            validate: {
                validator: isEmail,
                message: "Email is incorrect format"
            }
        },
        languages: {
            type: [String]
        },
        gender: {
            type: String,
            enum: {
                values: ['Male', 'Female'],
                message: '[VALUE] is not supported'
            },
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            validate: {
                validator: (phoneNumber) => phoneNumber.length > 5,
                message: 'Phone number must be at least 5 characters'
            }
        },
        address: {
            type: String,
            required: false
        }
    }, {
        autoCreate: false,
        autoIndex: true
    })
)