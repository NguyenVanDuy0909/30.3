var express = require('express')
var hbs = require('hbs')


var app = express()

var bodyParser = require("body-parser");
const { response } = require('express');
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'hbs')

var img = require('path').join(__dirname, '/img');
app.use(express.static(img));

app.post('/sendDangKy', (req, res) => {
    let nameValue = req.body.txtName;
    let genderValue = req.body.gender;
    let userInfo = {name:nameValue, gender:genderValue};
    res.render('confirm', {model:userInfo});
    // res.write('Name: ' + nameValue)
    // res.write('\nGender:' + genderValue);
    // res.end();

})

app.get('/register', (req, res) => {
    res.render('dangky')
})
app.get('/', (req, res) => {
    res.render('index')
})

var PORT = process.env.PORT || 3000
app.listen(PORT)
console.log('server is running on: ', PORT)
