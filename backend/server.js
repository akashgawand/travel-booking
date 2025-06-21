import express from "express";
import {connectDB} from "./config/mongodb.config.js"
import formRoutes from "./Routes/form.routes.js";
import dotenv from "dotenv";

import cors from "cors";

const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
dotenv.config({ path: "./.env" });

app.use("/", formRoutes); 

app.listen(process.env.PORT,()=>{
 connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
})
