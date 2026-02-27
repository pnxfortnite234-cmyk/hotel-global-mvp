
import express from 'express'

const router = express.Router()
let bookings = []

function isOverlapping(start,end,existing){
  return existing.some(b =>
    (start < b.checkout && end > b.checkin)
  )
}

router.post('/', (req,res)=>{
  const {checkin,checkout} = req.body
  const start = new Date(checkin)
  const end = new Date(checkout)

  if(isOverlapping(start,end,bookings))
    return res.status(400).json({error:'Date range unavailable'})

  const booking = {
    id: Date.now(),
    checkin: start,
    checkout: end,
    status:'pending',
    price: 1200
  }

  bookings.push(booking)
  res.json(booking)
})

router.get('/', (req,res)=>{
  res.json(bookings)
})

router.put('/:id/cancel', (req,res)=>{
  const booking = bookings.find(b=>b.id == req.params.id)
  if(!booking) return res.status(404).json({error:'Not found'})
  booking.status='cancelled'
  res.json(booking)
})

export default router
