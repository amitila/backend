import Exception from '../exceptions/Exception.js'
import { print, OutputType } from '../helpers/print.js'
import { User } from '../models/index.js'
import bcrypt from 'bcrypt'

const login = async ({email, password}) => {
    print('Login user in user repository', OutputType.INFORMATION)
}

const register = async ({
    name,
    email, 
    password,
    phoneNumber,
    address
}) => {
    try {   
        debugger
        let existingUser = await User.findOne({email}).exec()
        if(!!existingUser) { // check not null
            throw new Exception(Exception.USER_EXIST)
        }
        // encrypt password, use bcrypt
        // use for login purpose
        // const isMatched = await bcrypt.compare(password, existingUser.password)
        // if(isMatched) {

        // }
        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))
        //insert to db
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            phoneNumber,
            address
        })
        return newUser
    } catch (exception) {
        debugger
        // check model validation here
        throw new Exception(Exception.CANNOT_REGISTER_USER)
    }
    //validation already done
    print('Register user with: name: ' + name + " email: " + email + " password:" + " address:" + address, OutputType.INFORMATION)
}

export default {
    login,
    register
}