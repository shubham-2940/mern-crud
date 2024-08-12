import mongoose from "mongoose";

const conn=async () => {
    try {
        mongoose.connect(process.env.MONGOURL)
        console.log('Connected to database');
    } catch (error) {
        console.log(error);
    }
}

export default conn