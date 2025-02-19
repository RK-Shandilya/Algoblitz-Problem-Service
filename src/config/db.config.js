import mongoose from "mongoose";
import config from './server.config.js';


const dbConnect = async() => {
    try {
        if(config.NODE_ENV === 'development') {
            await mongoose.connect(config.ATLAS_DB_URL);
        }
    } catch (error) {
        console.log('Unable to connect to database !!');
        console.log(error);
    }
}

export default dbConnect