import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'

import postRoutes from './routes/postsRoutes.js'

const app = express()
app.use(express.json()) // to be able to send data to our db

app.use('/api/posts', postRoutes)

const PORT = process.env.PORT || 5050

app.listen(PORT, () => {
    console.log(`Server is listen at http://localhost:${PORT}`)
})