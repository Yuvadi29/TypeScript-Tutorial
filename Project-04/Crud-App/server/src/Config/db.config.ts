// Importing modules
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
};

const mongoURL = process.env.MONGO_URL;

if (!mongoURL) {
    console.error("MongoDB connection string is not defined in the environment variables.");
    process.exit(1); // Exit the process or handle the error appropriately
}

export const db = mongoose.connect(mongoURL, options)
    .then(() => {
        console.log(`Connected to Db Successfully`);
    })
    .catch(err => {
        console.error(err);
    });
