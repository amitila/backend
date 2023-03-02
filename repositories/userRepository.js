const login = async ({email, password}) => {
    console.log('Login user in user repository')
}

const register = async ({
    name,
    email, 
    password,
    address
}) => {
    //validation already done
    console.log('Register user with: name: ' + name + " email: " + email + " password:" + " address:" + address)
}

export default {
    login,
    register
}