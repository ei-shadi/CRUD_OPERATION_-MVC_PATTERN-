import dotenv from 'dotenv';
dotenv.config()
import express from "express";
import DB_CONNECT from './config/db.config.js';
import router from './routes/product.route.js';



const app = express()
const PORT = process.env.PORT || 5000

// MIDDLEWARE
app.use(express.json())

// DATABASE CONNECTION
DB_CONNECT();

// SERVER RESPONSE
app.get('/', (req, res) => {
  res.json({
    author: "Eftajul Islam Shadi",
    message: "Hey! Buddy, Welcome To Mr.BOOMBASTIC'S CRUD SERVER."
  })
})

// ROUTES
app.use('/api/v1', router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

