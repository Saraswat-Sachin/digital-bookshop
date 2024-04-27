import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import bookRoutes from './routes/bookRoutes.js'
import userRoutes from './routes/userRoutes.js'
import errorHandler from './middlewares/errorMiddleware.js'
import cookieParser from 'cookie-parser'
dotenv.config()
connectDB()

const app = express()
app.use(cors())

const PORT = process.env.PORT || 5000

//middleware for parsing data
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

//Routes
app.get('/', (req, res)=>{
    res.send("App is running...")
})
app.use('/api/books', bookRoutes)

app.use('/api/users', userRoutes)

//ErrorMiddleware
app.use(errorHandler)

app.listen(PORT, ()=> console.log(`Server running on port http://localhost:${PORT}`))