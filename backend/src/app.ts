import express from 'express'
import morgan from 'morgan'
import userRoutes from "./routes/user.js"
import { connectDB } from './utils/features.js';
import { errorMiddleware } from './middlewares/error.js';
import productRoute from './routes/products.js'
import orderRoute from './routes/order.js'
import paymentRoute from './routes/payment.js'
import NodeCache from 'node-cache';
import statisRoute from './routes/stats.js'
import { config } from 'dotenv';
import Stripe from 'stripe';
 

config()
connectDB(process.env.MONGO_URL||"");
const stripeKey=process.env.STRIPE_KEY || "";

export const stripe=new Stripe(stripeKey)
export const myCache=new NodeCache();

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use('/api/v1/user',userRoutes)
app.use('/api/v1/product',productRoute)
app.use('/api/v1/order',orderRoute)
app.use('/api/v1/payment',paymentRoute)
app.use('/api/v1/stats',statisRoute)

app.get('/', (req, res) => {
    res.send("API Working")
})
app.use('/uploads',express.static('uploads'))
app.use(errorMiddleware) 


app.listen(process.env.PORT,()=>{
console.log(`server started at ${process.env.PORT}`);
});
