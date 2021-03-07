const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// View engine setup
app.engine('handlebars', exphbs({
      extname: "hbs",
      defaultLayout: "",
      layoutsDir: "",
   }));
app.set('view engine', 'handlebars');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('contact');
});

app.post('/send', (req, res) => {
  const output = `
    <p>Your friend ${req.body.sName} has sent you this card!</p>
    <h2>Message:</h2>
    <p>${req.body.message}</p>
  `;

// here's where I try different servers, but nothing worked except mailtrap. 
// This is the latest version with elastic thing and aol mail. It displays message that mail was sent, 
// but in fact I didn't get anything
// On a side note, it contains info that shouldn't be on github, we will have to create enviromental 
// variables or encrypt it once it works 


// create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'paddymail.service@aol.com', // generated ethereal user
        pass: '96669AB13C59101A5D6FB66C111A9F614B9D'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

//   // setup email data with unicode symbols
  let mailOptions = {
      from: '"Paddy Mail" <paddymail.service@aol.com>', // sender address
      to: `${req.body.sEmail}`, // list of receivers
      subject: "Someone sent you a card!", // Subject line
      text: ' ', // plain text body
      replyTo: `${req.body.sEmail}`,
      html: output // html body
  };

//   // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('contact', {msg:'Your card has been sent!'});
  });
  });

app.listen(3000, () => console.log('Server started...'));