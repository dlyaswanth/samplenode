var express = require('express');
var app = express();
app.get('/', function(req, res)
{
    res.send("hello How are you?");
});

app.listen(3030,function(){
    console.log('server listening on port 3030');
});