const express = require('express');
const path = require('path');
const http = require('http');
const https = require('https')
const fs = require('fs')
const app = express();

const privateKey = fs.readFileSync('./myCA.key')
const certificate = fs.readFileSync('./myCA.pem')


app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

http.createServer(app).listen(80);

console.log('server is running')

https.createServer({
  key: privateKey,
  cert: certificate,
  passphrase: '0213456789ABC'
}, app).listen(443)