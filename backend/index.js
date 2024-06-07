import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js';
import authRouter from './routes/authRoute.js'

dotenv.config()

mongoose
    .connect(process.env.MONGO)
    .then(()=>{
        console.log('Connected to Database');
    })

const app = express ()

// Middleware
app.use(express.json());

// Routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);




app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})

// Error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });