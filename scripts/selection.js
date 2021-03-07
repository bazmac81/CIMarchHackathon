imageSelect = document.getFormById('image-select');

imageSelect.addEventListener('submit', function(e){
    selectImg(e);
});

function selectImg(e){
    e.preventDefault();
};