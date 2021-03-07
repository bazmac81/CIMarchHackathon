var choices = [];
var position = 0;
var getStarted = document.getElementById('start');

//Capture the section form elements to progress through the card creation
var imageSelect = document.getElementById('image-select');
var frameSelect = document.getElementById('frame-select')
var previewCard = document.getElementById('card-msg')
var confirmCard = document.getElementById('final-preview')

//Based on the current element of the journey, capture the user choices and save them to an array
function chooseSelection(e){
    e.preventDefault();
    var formID = e.target.getAttribute('id');
    var images;

    //Check which section has been activated to capture the relevant option and save to the array
    // index 0 = image, 1 = frame, 2 = message 
    switch (formID) {
        case "image-select":
            position = 0;
            images = document.getElementsByName('designRadioOptions')
            break;
        case "frame-select":
            position = 1;
            images = document.getElementsByName('frameRadioOptions')
            break;
        case "card-msg":
            position = 2;
            break; 
    }
    
    //Assign the image / frame option chosen
    if(position < 2){
        for (let i = 0; i < images.length; i++){
            if (images[i].checked){
                choices[position] = images[i].previousElementSibling.previousElementSibling.getAttribute('src');
            }
        }
    }
    //save the text entered for the message
    else {
        choices[position] = document.getElementById('messageTextarea1').value;
    }

    nextSection(e);
}

//Universal function to proceed through the options available
function nextSection(e){
    e.target.classList.toggle('d-none');
    e.target.nextElementSibling.classList.toggle('d-none');
}

//Universal function to go back to previous input option
function goBack(e){
    e.target.classList.toggle('d-none');
    e.target.previousElementSibling.classList.toggle('d-none');
}

//Initial submit fuction to get started on selecting options
function startCreation(){
    document.getElementById('intro').classList.toggle('d-none');
    document.getElementById('image-select').classList.toggle('d-none');
}

//Update the HTML with the choices made by the user, previously stored, to display a preview
function showPreview(){
    document.getElementById('card-img').setAttribute('src', choices[0]);
    document.getElementById('framed-msg').style.backgroundImage = "url("+choices[1]+")";
    document.getElementById('user-msg').innerText = choices[2];
}

//Event listeners to progress through the form creation using the 'submit' event
getStarted.addEventListener('click', startCreation, false);
imageSelect.addEventListener('submit', function(e){
    chooseSelection(e);
});
frameSelect.addEventListener('submit', function(e){
    chooseSelection(e);
});
previewCard.addEventListener('submit', function(e){
    chooseSelection(e);
    showPreview();
});
confirmCard.addEventListener('submit', function(e){
    chooseSelection(e);
});

//Event listeners to go back through the options using the 'reset' event
frameSelect.addEventListener('reset', function(e){
    goBack(e);
});
previewCard.addEventListener('reset', function(e){
    goBack(e);
});
confirmCard.addEventListener('reset', function(e){
    goBack(e);
});
