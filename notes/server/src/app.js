import express from 'express'
import authRouter from './routes/auth.route.js'  
import errorHandler from './middlewares/error.middleware.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRouter)


app.use(errorHandler)

export default app