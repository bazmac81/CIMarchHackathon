var choices = [];
var position = 0; 
var imageSelect = document.getElementById('image-select');
var frameSelect = document.getElementById('frame-select')
var getStarted = document.getElementById('start');

function chooseSelection(e){
    e.preventDefault();
    var images = imageSelect.getElementsByTagName('input');
    
    switch (e.target.getAttribute('id')) {
        case "image-select":
            position = 0;
            break;
        case "frame-select":
            positon = 1;
            break;
        case "card-msg":
            position = 2;
            break; 
    }
    
    if(position<2){
        for (let i =0; i < images.length; i++){
            if (images[i].hasAttribute('checked')){
                console.log(images[i].previousElementSibling.previousElementSibling)
                choices[position] = images[i].previousElementSibling.previousElementSibling.getAttribute('src');
            }
        }
    }
    else {
        choices[position] = e.target.getElementsByTagName('input').value;
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

imageSelect.addEventListener('submit', function(e){
    chooseSelection(e);
});
frameSelect.addEventListener('submit', function(e){
    chooseSelection(e);
});

getStarted.addEventListener('click', startCreation, false);


