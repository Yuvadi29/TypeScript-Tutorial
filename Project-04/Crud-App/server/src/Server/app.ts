import express from "express";
import { db } from "../Config/db.config";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.then(() => {
    app.listen(7070, () => console.log('Server is listening on port 7070'))
})
