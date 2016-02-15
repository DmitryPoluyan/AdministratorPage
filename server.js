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
    return UserModel.find(function (err, users){//зачем ты делаешь вывод в двух местах? в user.js тоже ведь ищет и выводит только в консоль.. а тут отправляется браузеру... а тот когда в юзере который добавляет данные в базу и выводит в консольку вообще срабатывает? не уверен чёт я.. посмотри про организацию кода... надо разбить модели отдельно... функции которые обрабатывают запросы это контроллеры.. их тоже отдельно надо... 
        if(!err)
        {// по поводу такого синтаксиса.. хз где ты его такой увидел.. но почитай как нибудь кодстайл
    
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
