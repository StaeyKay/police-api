import { statementModel } from "../models/statement_model.js";

// function to store data in the database
export const addStatement = async (req, res) => {
    try {
    // The request states what should be expected in the console log
    console.log('request', req.body)

    // The create mothod adds data to the database
    const addData = await statementModel.create(req.body)
    // The await keyword is to await feedback from the create method, to find out whether the data was added to the database. It works with async
    res.send('statement added');

    } catch (error) {
        console.log(error)
    }
}