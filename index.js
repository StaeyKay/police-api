import express from "express";
import 'dotenv/config';
import { dbConnection } from "./config/db.js";
import { statementRouter } from "./routes/statements_router.js";

// import * as dotenv from "dotenv"
// dotenv.config

// Create an express file
const policeApp = express();

dbConnection();

// Add the middleware
policeApp.use(express.json());

// Define routes
policeApp.post('/create', (req, res) => {
    res.json("An account has been created")
});

// Use other routes defined in other files
policeApp.use(statementRouter);

// Listen for incoming requests
policeApp.listen(5000, () => {
    console.log("The express app is listening");
});