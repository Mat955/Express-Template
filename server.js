var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/auth/google', function (req, res) {
    res.render('login');
});

app.get('/logged', function (req, res) {
    res.render('logged', {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    });
});

app.use(function (req, res, next) {
    res.status(404).send('Sorry, we could not find what you want!')
});

const server = app.listen(3000, 'localhost', function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Google Login App listen at http://' + host + ':' + port);
});
