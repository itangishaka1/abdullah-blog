import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import { db } from './database.js'

import postRoutes from './routes/postsRoutes.js'
import authRoutes from './routes/authRoutes.js'
import usersRoutes from './routes/usersRoutes.js'

const app = express()
app.use(express.json()) // to be able to send data to our db
app.use(cookieParser())
app.use(cors())

app.use('/api/auth', authRoutes) 
app.use('/api/users', usersRoutes)
app.use('/api/posts', postRoutes)


const PORT = process.env.PORT || 5050

app.listen(PORT, () => {
    console.log(`Server is listen at http://localhost:${PORT}`)
})