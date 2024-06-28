import { Router } from "express";
import { addStatement, deleteStatement, getStatement, getStatements, updateStatement } from "../controllers/statement_controller.js";

// Create a router
export const statementRouter = Router();

// Define routes
statementRouter.post('/statement', addStatement)

statementRouter.get('/statement', getStatements)

statementRouter.get('/statement/:id', getStatement)

statementRouter.patch('/statement/:id', updateStatement)

statementRouter.delete('/statement/:id', deleteStatement)