// function sendEmail() { 
//       Email.send({ 
//         Host: "smtp.gmail.com", 
//         Username: "paddymail.service@gmail.com", 
//         Password: "Hackme21", 
//         To: 'iryna.sanzhara@gmail.com', 
//         From: "paddymail.service@gmail.com", 
//         Subject: "Sending Email using javascript", 
//         Body: "Well that was easy!!", 
//         Attachments : [{
//         name : "File_Name_with_Extension",
//         path:"Full Path of the file"
// }]
//       }) 
//         .then(function (message) { 
//           alert("Your card was sent successfully!") 
//         }); 
//     } 


// const SibApiV3Sdk = require('sib-api-v3-sdk');
// let defaultClient = SibApiV3Sdk.ApiClient.instance;

// let apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = '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';

// let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

// sendSmtpEmail.subject = "My {{params.subject}}";
// sendSmtpEmail.htmlContent = "<html><body><h1>This is my first transactional email {{params.parameter}}</h1></body></html>";
// sendSmtpEmail.sender = {"name":"Paddy Mail","email":"paddymail.service@gmail.com"};
// sendSmtpEmail.to = [{"email":"iryna.sanzhara@gmail.com","name":"Jane Doe"}];
// sendSmtpEmail.replyTo = {"email":"replyto@domain.com","name":"John Doe"};
// sendSmtpEmail.headers = {"Some-Custom-Name":"unique-id-1234"};
// sendSmtpEmail.params = {"parameter":"My param value","subject":"New Subject"};

// apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
//   console.log('API called successfully. Returned data: ' + JSON.stringify(data));
// }, function(error) {
//   console.error(error);
// });