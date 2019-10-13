// npm install nodemailer
var nodemailer = require('nodemailer');

/**
* Note: https://myaccount.google.com/security
* Go to: "Less secure app access" Section
* Enable it.
*/
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'password'
  }
});

var mailOptions = {
  from: 'your-email@gmail.com',
  to: 'receiver-email@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});