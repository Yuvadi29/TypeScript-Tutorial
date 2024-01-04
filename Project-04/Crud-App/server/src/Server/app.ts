import express from "express";
import { db } from "../Config/db.config";
import { router } from '../Routes/posts.routes';
import cors from 'cors';

const app = express();
app.use(cors());

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/posts', router);

db.then(() => {
    app.listen(7070, () => console.log('Server is listening on port 7070'))
})
