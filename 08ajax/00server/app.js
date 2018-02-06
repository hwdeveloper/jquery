var express = require('express');
var app = express();
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/index', function (req, res) {
    res.sendFile( __dirname + "/" + "douban.txt" );
})

app.post('/user', urlencodedParser, function (req, res) {
    var name =req.body.name;
    var age =req.body.age;
    var user={
        name:'超级'+name,
        age:'超级'+age
    }
    res.write(JSON.stringify(user));
    res.end();
})

var server = app.listen(8088)