import express from 'express';
import pg from 'pg';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Frontend/public/index.html');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})