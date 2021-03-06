function sendEmail() { 
      Email.send({ 
        Host: "smtp.gmail.com", 
        Username: "iryna.sanzhara@gmail.com", 
        Password: "Enter your password", 
        To: 'iryna.sanzhara@gmail.com', 
        From: "iryna.sanzhara@gmail.com", 
        Subject: "Sending Email using javascript", 
        Body: "Well that was easy!!", 
//         Attachments : [{
//         name : "File_Name_with_Extension",
//         path:"Full Path of the file"
// }]
      }) 
        .then(function (message) { 
          alert("Your card was sent successfully!") 
        }); 
    } 