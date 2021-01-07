const express = require('express');
const path = require('path');
const http = require('http');
const app = express();


app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

http.createServer(app).listen(80);

console.log('server is running')