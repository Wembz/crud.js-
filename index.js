//code to connect the express to mongoDB database 

import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/userRoutes.js"

//Initualise the constant express app
const app = express(); 

//create middleware to parse json request
app.use(bodyParser.json());

//load env viariable for dotenv files
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

//code to connect to mongodb
mongoose
.connect(MONGOURL)
.then(() => {
    console.log("Database connected successful.");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => console.log(error));

//User the Routes
app.use("/api/user", route);
