var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejsLayouts = require("express-ejs-layouts");
const db = require("./models");
var app = express();
const nodemailer = require('nodemailer');
const password = require('password-hash-and-salt');


var index = require('./routes/index');



let penv = (db.env).toUpperCase();
let port = 5000;




app.set('port', port);

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(ejsLayouts);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


    /**
     * Listen on provided port, on all network interfaces.
     */
    app.listen(port, function (error) {
        if (error) throw err;
        else {
            console.log('\n...server listening on port %i in %s environment', port, penv);
        }
    });





// function sendTheMail() {
//     let smtpConfig = {
//         host: 'smtp.gmail.com',
//
//         port: 587,
//         secure: false, // upgrade later with STARTTLS
//         auth: {
//             user: 'ncmarys.way@gmail.com',
//             pass: 'annWin47'
//         }
//     };
//     var transporter = nodemailer.createTransport(smtpConfig);
// create reusable transporter object using the default SMTP transport


// send mail with defined transport object

// setup e-mail data with unicode symbols
//     var message = {
//         from: 'ncmarys.way@gmail.com', // sender address
//         to: 'jwin4740@gmail.com', // list of receivers
//         subject: 'test', // Subject line
//         text: 'hello world', // plaintext body
//         // html: '<b>Hello world </b>' // html body
//     };
//
//     transporter.sendMail(message, function (error, res) {
//         console.log("gmail cmon more");
//         if (error) {
//             return console.log(error);
//         }
//         return console.log("mail send successfully");
//     });
//
// }
