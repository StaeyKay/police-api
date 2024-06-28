import mongoose from "mongoose";
// import schema from mongoose
const {Schema, model} = mongoose;

// Defining the schema for the statement model
const statementSchema = new Schema({
    incidentType: {type: String, enum: ['criminal', 'non-criminal']},
    civilianStatus: {type: String, enum: ['complainant', 'suspect', 'witness']},
    statement: {type: String},
    caseStatus: {type: String, enum: ['open', 'closed']},
    civilianId: {type: String},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()}
});

// Creating a model for statement
export const statementModel = model('statement', statementSchema)