const sendingMails = require('./nodemailer.js');
const handlebars = require("handlebars");
const fs = require('fs');

async function campReminder({username:name, email:email, endDate:end, clientName:client}){
    console.log("Senidng mail to: "+ email +"& Name is"+ name);
    const source = fs.readFileSync('email_template.html', 'utf-8').toString();
    const template = handlebars.compile(source);
    const replacements = {
        username: name,
        expire_date: end,
        client_name:client
    };

    const htmlToSend = template(replacements);

    try {
        await sendingMails.emailSent({sendTo:email, title:"Signpost Expiration Remainder",
    message:"We are testing this mail", template:htmlToSend, emailType:"registration successful"});
    } catch (err) {
        res.send(err);
    }
}

// var live = "http://localhost:1000";
var live = "https://enzymesmillionaireclub.com"

function resetPassword({email:userEmail, userID:id}){
    try {sendingMails.emailSent({sendTo:userEmail, title:"Password Reset",
     message:"Kindly Click the link below to reset your password | "+live+"/gen-newemc/22"+id+"rectify"
     ,template:"none",emailType:"Password Reset"});
    } catch (err){
        res.send(err);
    }
}



// module.exports = {emailTemplate};

module.exports = {
    reminderMail:campReminder,
    passwordResetMail:resetPassword,
  }