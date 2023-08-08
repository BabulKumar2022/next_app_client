import mongoose from "mongoose";

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONO_URI);
    } catch (error) {
        throw new Error("connection failed")
    }
}
export default connect;