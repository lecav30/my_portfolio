require('dotenv').config(); // This is important to use the .env file

const express = require('express');
const app = express();

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000; // Nodemon will use 5000, Heroku will use process.env.PORT

app.use(express.static('src'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

app.post('/', (req, res) => {
    console.log(req.body);

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // secure:true for port 465, secure:false for port 587
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        }
    });

    var mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL,
        subject: `Message from ${req.body.email} : ${req.body.subject}`,
        text: req.body.message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
