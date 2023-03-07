import { body, validationResult } from 'express-validator'
import HttpStatusCode from '../exceptions/HttpStatusCode.js'

async function getAllStudents (req, res) {
    // res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
    //     message: "Cannot get students"
    // })

    res.status(HttpStatusCode.OK).json({
        message: "Get students successfully",
        data: [
            {
                name: 'Nguyen Van A',
                email: "a@gmail.com",
                age: 18
            },
            {
                name: 'Nguyen Van B',
                email: "b@gmail.com",
                age: 19
            },
            {
                name: 'Nguyen Van C',
                email: "c@gmail.com",
                age: 20
            }
        ]
    })
}

async function getStudentById (req, res) {
    res.send('GET detail student by id: '+ req?.params?.id ?? "")
}

async function updateStudent (req, res) {
    res.send('PATCH(create new object if not exists) insert student')
}

async function insertStudent (req, res) {
    res.send('POST insert student')
}

export default {
    getAllStudents,
    getStudentById, 
    updateStudent, 
    insertStudent
}