import mongoose from 'mongoose'

// Note schema definition
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // Reference to the user who created the note
    // This creates a relationship between the note and the user, allowing us to easily query notes by user
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
}, { timestamps: true })

// Note model creation
const noteModel = mongoose.model('note', noteSchema)

export default noteModel