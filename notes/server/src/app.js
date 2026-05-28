import express from 'express'
import authRouter from './routes/auth.route.js'  
import errorHandler from './middlewares/error.middleware.js'
import cookieParser from 'cookie-parser'
import noteRouter from './routes/note.route.js'

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRouter)
app.use('/api/notes', noteRouter)

app.use(errorHandler)

export default app