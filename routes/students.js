import express from 'express'
import {
    studentController
} from '../controllers/index.js'

const router = express.Router()
router.get('/', studentController.getAllStudents)
router.get('/:id', studentController.getStudentById)
// put (not found object and then exit) and patch (not found object and create new)
router.patch('/', studentController.updateStudent)
router.post('/', studentController.insertStudent)

export default router