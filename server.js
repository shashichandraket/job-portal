//imports
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import "express-async-errors";

import morgan from "morgan";
//files import
import connectDB from "./config/db.js";
//routes import
import errroMiddelware from "./middelwares/errroMiddleware.js";
import authRoutes from './routes/authRoutes.js';
import testRoutes from "./routes/testRoutes.js";

//Dot ENV config
dotenv.config()


//mongodb connection
connectDB();


//rest object
const app=express()

//middlewares
app.use(express.json());
app.use(cors())
app.use(morgan("dev"))


//routes
app.use('/api/v1/test',testRoutes);
app.use('/api/v1/auth',authRoutes);

//validation middelware
app.use(errroMiddelware);

//port
const PORT=process.env.PORT || 8080
//listen
app.listen(PORT ,()=> {
    console.log(`Node Server Running In ${process.env.DEV_MODE} Mode on port no${PORT}`);
});