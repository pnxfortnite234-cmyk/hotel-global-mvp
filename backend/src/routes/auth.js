
import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const router = express.Router()
let users = []

router.post('/register', async (req,res)=>{
  const {email,password} = req.body
  const hash = await bcrypt.hash(password,10)
  users.push({email,password:hash,role:'client'})
  res.json({message:'Registered'})
})

router.post('/login', async (req,res)=>{
  const {email,password} = req.body
  const user = users.find(u=>u.email===email)
  if(!user) return res.status(401).json({error:'Invalid'})
  const valid = await bcrypt.compare(password,user.password)
  if(!valid) return res.status(401).json({error:'Invalid'})
  const token = jwt.sign({email:user.email,role:user.role},'secret',{expiresIn:'1h'})
  res.json({token})
})

export default router
