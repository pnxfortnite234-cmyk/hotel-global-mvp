
'use client'
import { useState } from 'react'
import axios from 'axios'

export default function Home(){
  const [bookings,setBookings] = useState([])

  const createBooking = async ()=>{
    const res = await axios.post('http://localhost:5000/api/bookings',{
      checkin:'2026-06-01',
      checkout:'2026-06-05'
    })
    alert('Booking created')
  }

  const loadBookings = async ()=>{
    const res = await axios.get('http://localhost:5000/api/bookings')
    setBookings(res.data)
  }

  return (
    <div style={{padding:40,fontFamily:'sans-serif'}}>
      <h1>Hotel Global MVP</h1>
      <button onClick={createBooking}>Create Booking</button>
      <button onClick={loadBookings} style={{marginLeft:10}}>Load Bookings</button>
      <ul>
        {bookings.map(b=>(
          <li key={b.id}>{b.checkin} - {b.checkout} ({b.status})</li>
        ))}
      </ul>
    </div>
  )
}
