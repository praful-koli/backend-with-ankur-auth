import mongoose from 'mongoose'

// User schema definition
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },  
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

// User model creation  
const userModel = mongoose.model('users', userSchema)

export default userModel