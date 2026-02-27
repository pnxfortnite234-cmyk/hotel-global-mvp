
import express from 'express'
import cors from 'cors'
import bookingRoutes from './routes/bookings.js'
import authRoutes from './routes/auth.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/bookings', bookingRoutes)

app.get('/api/health', (req,res)=>res.json({status:'OK'}))

app.listen(5000, ()=>console.log('Global MVP running on 5000'))
