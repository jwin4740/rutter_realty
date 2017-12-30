var express = require('express');
var router = express.Router();
const db = require("../models");
require('dotenv').config()
const nodemailer = require('nodemailer');



router.get('/registration', function (req, res, next) {
    res.render('pages/contact', {});
});

router.get('/wizard', function (req, res, next) {
    res.render('pages/wizard', {});
});
router.get('/', function (req, res, next) {
    res.render('pages/welcome', {});
});

// router.get('/parishes/:state', async(req, res, next) => {
//     var parish;
//     try {
//         var state = req.params.state;
//         parish = await db.parishes.findAll({
//             where: {
//                 STATE: state
//             },
//             raw: true
//         });
//         console.log(parish);

//     } catch (e) {
//         console.log(e);

//     }
//     res.render('pages/parishes', {
//         parish: parish,
//         state: state
//     });

// });

// router.get('/blog', async(req, res, next) => {
//     var blog;
//     try {
//         // var state = req.params.state;
//         blog = await db.blog_table.findAll({});
//         console.log(blog);

//     } catch (e) {
//         console.log(e);

//     }
//     res.render('pages/blog', {
//         blog: blog
//     });
// });

// router.get('/about', function (req, res, next) {
//     res.render('pages/about', {});
// });
// router.get('/prayers', function (req, res, next) {
//     res.render('pages/prayers', {});
// });

// router.get('/quotes', async(req, res, next) => {
//     console.log("worked");
//     var q;
//     try {

//         q = await db.quotes.findAll({});
//         console.log(q);

//     } catch (e) {
//         console.log(e);
//     }
//     res.render('pages/quotes', {
//         q: q
//     });

// });

// router.get('/blog', function (req, res, next) {
//     res.render('pages/blog', {});
// });

// router.get('/admin', function (req, res, next) {
//     res.render('pages/admin', {});
// });

// POST http://localhost:8080/api/users
// parameters sent with
router.post('/mailpost', function (req, res) {
    var fullName = 'Rutter Realty';
    var phoneNumber = req.body.phoneNumber;
    var email = req.body.email;

    console.log(req.body);


    // create reusable transport method (opens pool of SMTP connections)
    let smtpTransport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: 'ncmarys.way',
            pass: 'annWin47'
        }
    });

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: `${fullName} <${email}>`, // sender address
        to: email, // list of receivers
        subject: "Contact form submitted", // Subject line
        text: "<a>https://rutterrealtygc.kw.com/</a>"
    }

    // send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent");
        }
        // if you don't want to use this transport object anymore, uncomment following line
        //smtpTransport.close(); // shut down the connection pool, no more messages
    });



    res.redirect("/");


});

router.get('/contact', function (req, res, next) {
    res.render('pages/contact', {});
});


module.exports = router;