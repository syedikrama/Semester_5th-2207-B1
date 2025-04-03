let nodemailer = require('nodemailer');
require('dotenv').config();

let email_info = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
})

let email_body = {
    
    // ------------ agr ziyada logon ko email bhejni tu [] mai bhejien gy ----------------

    // to : process.env.RECEIVER,
    // from: process.env.EMAIL,
    // subject : 'Test Email',
    // html : '<h5>Hello, this is a test email sent from <b> Node.js </b> </h5>',
    // to : process.env.RECEIVER_1,
    // from: process.env.EMAIL,
    // subject : 'Test Email Phr lo is ko',
    // html : '<h3>Hello, this is a test email sent from <b>Node Js</b> <p>Aj Phr gaib check kr rahy ho email aii <p/> </h3>',
    to : process.env.RECEIVER_2,
    from: process.env.EMAIL,
    subject : 'Test Email',
    html : '<h3>Hello, this is a test email sent from <b>Node Js</b></h3>',
}

email_info.sendMail(email_body,function (error , info){
    if (error) {
        console.log('Somethings went wrong');
        console.log(error);     
    } else {
        console.log(`Email has been send ${email_body.to}`);
        console.log(info)
    }
})