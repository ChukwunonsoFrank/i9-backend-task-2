import express from 'express'
import cors from 'cors'
import userRoutes from '../routes/v1/user.route.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/v1', userRoutes)

export default app