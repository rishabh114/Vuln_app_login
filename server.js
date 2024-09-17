import * as http from 'http';
import { URL } from 'url';

const server = http.createServer(function(req, res) {
    const target = new URL(req.url || '', "http://example.com").searchParams.get("target"); // Source

    // Check if target is provided and is a valid string
    if (!target || typeof target !== 'string') {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.end('Bad Request');
        return;
    }

    // BAD: `target` is controlled by the attacker
    http.get('https://' + target + ".example.com/data/", response => {  // Sink
        let data = '';

        response.on('data', chunk => {
            data += chunk;
        });

        response.on('end', () => {
            // Process request response ...
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(data);
        });
    }).on('error', err => {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error');
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
