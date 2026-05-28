import mongoose from 'mongoose'

// Database connection
const connectDB = async () => {
    try {
        // Connect to MongoDB using the connection string from environment variables
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Database connected successfully')
    } catch (error) {
        console.log('Database connection failed', error.message)
    }
}

export default connectDB