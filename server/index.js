var express = require('express');
var path = require('path');

var port = 3000;
var app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Server running on port ${port} yay!`));