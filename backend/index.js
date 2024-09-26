import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js';
import authRouter from './routes/authRoute.js'
import postRouter from './routes/postRoute.js'
import commentRouter from './routes/commentRoute.js'
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config()

mongoose
    .connect(process.env.MONGO)
    .then(()=>{
        console.log('Connected to Database');
    })

const app = express ()

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);
app.use("/api/comment", commentRouter);

// Serve static files from the frontend/dist directory
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// Catch-all route to serve the frontend app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});



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