// Importing modules
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const dbName = 'Post';

const mongoURL = `process.env.MONGO_URL${dbName}`;

const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
};

export const db = mongoose.connect(mongoURL, options)
    .then(res => {
        if (res) {
            console.log(`Connected to Db Successfully to ${dbName}`);
        }
    }).catch(err => {
        console.log(err);
    })