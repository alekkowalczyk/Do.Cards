var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')

var app = express()

app.use(session({
    secret: "Do.Cards123"
}));


app.get('/foo', function (req, res, next) {
    console.log(req.session);
  res.send('you viewed this page times')
})

app.get('/bar', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/bar'] + ' times')
})

app.listen(3000);
console.log("listening on port 3000 :-))))");