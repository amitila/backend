import mongoose from "mongoose";

async function connect() {
    try {
        let connection = await mongoose.connect(process.env.MONGO_URI)
        console.log('connect mongoose successfully');
        return connection
    } catch (error) {
        const {code} = error
        debugger
        if(error.code == 8000) {
            throw new Error("Username or password is not correct")
        } else if(code == 'ENOTFOUND') {
            throw new Error("Wrong server name /connection string")
        }
        throw new Error('Cannot connect to MongoDB')
    }
}

export default connect