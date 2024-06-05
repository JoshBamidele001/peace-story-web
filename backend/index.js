import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js';

dotenv.config()

mongoose
    .connect(process.env.MONGO)
    .then(()=>{
        console.log('Connected to Database');
    })

const app = express ()


// Routes
app.use("/api/user", userRouter);




app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})