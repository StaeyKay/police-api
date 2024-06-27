import { Router } from "express";
import { addStatement } from "../controllers/statement_controller.js";

// Create a router
export const statementRouter = Router();

// Define routes
statementRouter.post('/statement', addStatement)