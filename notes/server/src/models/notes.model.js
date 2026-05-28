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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
}, { timestamps: true })

// Note model creation
const noteModel = mongoose.model('note', noteSchema)

export default noteModel