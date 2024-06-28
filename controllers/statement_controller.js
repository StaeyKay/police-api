import { statementModel } from "../models/statement_model.js";

// function to store data in the database
export const addStatement = async (req, res) => {
    try {
    // The request states what should be expected in the console log
    console.log('request', req.body)

    // The create mothod adds data to the database
    const addData = await statementModel.create(req.body)
    // The await keyword is to await feedback from the create method, to find out whether the data was added to the database. It works with async
    res.status(200).send(addData)

    } catch (error) {
        console.log(error)
    }
}

// function to get statement from the database
export const getStatements = async (req, res, next) => {
    try {
        const allStatements = await statementModel.find();
        // Return all statements
        res.status(200).json(allStatements);
    } catch (error) {
        next(error)
    }
}

export const getStatement = async (req, res, next) => {
    try {
        const statement = await statementModel.findById(req.params.id)
        res.status(200).json(statement);
    } catch (error) {
        next(error)
    }
}

export const updateStatement = async (req, res, next) => {
    try {
        const status = req.body.caseStatus
        console.log("request", status);
        const addData = await statementModel.findByIdAndUpdate(req.params.id, {caseStatus: status});
        res.status(200).send(addData)
    } catch (error) {
        next(error)
    }
}

export const deleteStatement = (req, res, next) => {
    try {
        const deleteData = statementModel.findByIdAndDelete(req.params.id)
        res.status(200).send(`Statement with ID ${req.params.id} has been deleted successfully.`)
    } catch (error) {
        next(error)   
    }
}