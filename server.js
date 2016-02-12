var express = require('express');
var path = require('path');
var app = express();
app.get ('/api', function (req, res)
{
    res.send("API is running");
});
app.listen('3000', function(){
    console.log('Server running in port 3000');
});