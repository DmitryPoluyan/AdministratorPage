var express = require('express');
var dbConnect = require('./db');
var UserModel = require('./user');
var app = express();
app.get ('/api', function (req, res)
{
    res.send("API is running");
});
app.get ('/admin_page', function (req, res)
{
    return UserModel.find(function (err, users){
        if(!err)
        {
            return res.send(users);
        }
        else
        {
            res.statusCode = 500;
            log.error('Internal error(%d): %s', res.statusCode, err.message);
            return res.send({ error: "Server error" });
        }
    });
});
app.listen('3000', function(){
    console.log('Server running in port 3000');
});