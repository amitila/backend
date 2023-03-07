import { 
    body, 
    validationResult 
} from 'express-validator'
import {
    userRepository,
    studentRepository
} from '../repositories/index.js'
import HttpStatusCode from '../exceptions/HttpStatusCode.js';
import { EventEmitter } from "node:events";
const myEvent = new EventEmitter()
//listen
myEvent.on('event.register.user', (params) => {
    console.log(`They talked about: ${JSON.stringify(params)}`)
})

const login = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(HttpStatusCode.BAD_REQUEST).json({ errors: errors.array()})
    }
    const {email, password} = req.body
    console.log(email, password)

    //call repository
    await userRepository.login({email, password})

    res.status(HttpStatusCode.OK).json({
        message: "Login user successfully"
    })
}

const register = async (req, res) => {
    //destructuring 
    const {
        name,
        email, 
        password,
        address
    } = req.body
    await userRepository.register({name, email, password, address})
    //Event Emitter
    myEvent.emit('event.register.user', req.body)

    res.status(HttpStatusCode.OK).json({
        message: "Register user successfully"
    })
}

const getDetailUser = async (req, res) => {
    res.status(HttpStatusCode.OK).json({
        message: "Get detail of user successfully"
    })
}

export default {
    login,
    register,
    getDetailUser
}