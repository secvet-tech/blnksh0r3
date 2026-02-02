const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

//Serve all files in the blnksh0r3 dir
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
console.log('server running');
}); 
