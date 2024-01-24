import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import path from 'path';
import { notFound, errorHandler } from './middleware/errorHandler.js';


const port =process .env.PORT||5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req,res) => res.send({ clientId: process.env.PAYPAL_CLIENT_ID }));

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
console.log("env is working",process);
console.log(process.env);
console.log("ok",process.env.NODE_ENV)

if (process.env.NODE_ENV === 'production') {

    console.log("The website is working now");
    app.use(express.static(path.join(__dirname, '/frontend/build'))); 
    app.get('*', (req, res) => 
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
} 
else {
    app.get('/', (req, res)=>{
        res.send('Hi everyone...')
    });
}


app.use(notFound);
app.use(errorHandler);


app.listen(port, ()=>{
    console.log(`server running on port: ${port}`)
});