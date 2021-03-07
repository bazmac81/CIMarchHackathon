var choices = [];
var position = 0;
var getStarted = document.getElementById('start');

//Capture the section form elements to progress through the card creation
var imageSelect = document.getElementById('image-select');
var frameSelect = document.getElementById('frame-select')
var previewCard = document.getElementById('card-msg')

function chooseSelection(e){
    e.preventDefault();
    var formID = e.target.getAttribute('id');
    var images = e.target.getElementsByTagName('input');

    switch (formID) {
        case "image-select":
            position = 0;
            break;
        case "frame-select":
            position = 1;
            break;
        case "card-msg":
            position = 2;
            break; 
    }
    
    console.log(images);

    if(position < 2){
        for (let i = 0; i < images.length; i++){
            if (images[i].hasAttribute('checked')){
                choices[position] = images[i].previousElementSibling.previousElementSibling.getAttribute('src');
            }
        }
    }
    else {
        choices[position] = document.getElementById('messageTextarea1').value;
    }
    
    console.log(choices);
    nextSection(e);
}

function nextSection(e){
    e.target.classList.toggle('d-none');
    e.target.nextElementSibling.classList.toggle('d-none');
}

function startCreation(){
    document.getElementById('intro').classList.toggle('d-none');
    document.getElementById('image-select').classList.toggle('d-none');
}

function showPreview(){
    document.getElementById('card-img').setAttribute('src', choices[0]);
    document.getElementById('framed-msg').style.backgroundImage = "url("+choices[1]+")";
    document.getElementById('user-msg').innerText = choices[2];
}

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

getStarted.addEventListener('click', startCreation, false);