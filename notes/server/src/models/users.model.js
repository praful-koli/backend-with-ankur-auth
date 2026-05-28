import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
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

// hash password before save using bcrypt
userSchema.pre('save', function(next) {
    // only work when the password is new
    if (this.isModified(this.password)) {
        this.password = bcrypt.hashSync(this.password ,10)
        next()
    }
     next()
})

// compare pasword methodf or login 
userSchema.methods.comparePassword =  function(password) {
    return  bcrypt.compareSync(password, this.password)
}

export default userModel