import staticHandler from './staticHandler.mjs'
import { readFileSync } from 'fs';
import { createSecureServer } from 'http2';

const http2Server = createSecureServer({
  key: readFileSync('key.pem'),
  cert: readFileSync('cert.pem'),
}, (req, res) => {
  staticHandler(req, res);
});

http2Server.listen(4000, () => {
  console.log('HTTP/2 server running at https://localhost:4000/');
});