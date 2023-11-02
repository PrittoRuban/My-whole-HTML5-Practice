var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var path = require('path');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const cookieConfig = {
    httpOnly: true
};

app.post('/', (req, res) => {
    res.clearCookie();
    res.cookie('bgcolor', req.body["bgcolor"], cookieConfig);
    res.cookie('color', req.body["textcolor"], cookieConfig);
    res.cookie('fontsize', req.body["fontsize"], cookieConfig);
    res.sendFile(path.join(__dirname, "../website/Home.html"));
});

app.get('/send', (req, res) => {
    res.send(req.cookies);
});

app.listen(4000);