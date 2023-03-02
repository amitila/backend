import { 
    body, 
    validationResult 
} from 'express-validator'
import {
    userRepository,
    studentRepository
} from '../repositories/index.js'
import { EventEmitter } from "node:events";
const myEvent = new EventEmitter()
//listen
myEvent.on('event.register.user', (params) => {
    console.log(`They talked about: ${JSON.stringify(params)}`)
})

const login = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
    }
    const {email, password} = req.body
    console.log(email, password)

    //call repository
    await userRepository.login({email, password})

    res.status(200).json({
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

    res.status(200).json({
        message: "Register user successfully"
    })
}

const getDetailUser = async (req, res) => {
    res.status(200).json({
        message: "Get detail of user successfully"
    })
}

export default {
    login,
    register,
    getDetailUser
}