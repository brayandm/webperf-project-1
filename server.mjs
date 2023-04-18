import staticHandler from './staticHandler.mjs'
import { readFileSync } from 'fs';
import { createSecureServer } from 'http2';
import { createServer } from 'http';

const server = createServer((req, res) => {
  staticHandler(req, res)
})

server.listen(4000, () => {
  console.log('Server running at http://localhost:4000/')
})

const http2Server = createSecureServer({
  key: readFileSync('key.pem'),
  cert: readFileSync('cert.pem'),
}, (req, res) => {
  staticHandler(req, res);
});

http2Server.listen(4001, () => {
  console.log('HTTP/2 server running at https://localhost:4001/');
});