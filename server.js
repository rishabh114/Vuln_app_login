import express from 'express';
import * as fs from 'fs/promises';
import * as path from 'path';
import * as http from 'http';
import { URL } from 'url';

const app = express();
const port = 8080;
const BASE_DIR = path.join(__dirname, 'files'); // Directory for file reading

// Endpoint for file reading
app.get('/file', async (req, res) => {
    const filePath = req.query.path as string;

    if (filePath) {
        try {
            const fullPath = path.resolve(BASE_DIR, filePath);
            if (!fullPath.startsWith(BASE_DIR)) {
                res.status(400).send('Invalid file path');
                return;
            }
            const data = await fs.readFile(fullPath, 'utf8');
            res.status(200).send(data);
        } catch (err) {
            res.status(404).send('File not found');
        }
    } else {
        res.status(400).send('Missing path parameter');
    }
});

// Insecure redirection endpoint
app.get('/redirect', (req, res) => {
    const target = new URL(req.url || '', `http://${req.headers.host}`).searchParams.get('target'); // Source

    // Check if target is provided and is a valid string
    if (!target || typeof target !== 'string') {
        res.status(400).send('Bad Request');
        return;
    }

    // BAD: `target` is controlled by the attacker
    http.get('https://' + target + '.example.com/data/', response => { // Sink
        let data = '';

        response.on('data', chunk => {
            data += chunk;
        });

        response.on('end', () => {
            res.status(200).send(data);
        });
    }).on('error', err => {
        res.status(500).send('Internal Server Error');
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
