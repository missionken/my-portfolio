import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors({
  origin: 'https://missionken.github.io',
  methods: ['GET', 'POST'],
}))
app.use(express.json())

// Test route - to check if server is working
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio backend is running!' })
})

// Contact form route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  await transporter.sendMail({
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Portfolio message from ${name}`,
    text: message
  })

  res.json({ success: true, message: 'Message sent!' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))