// working prevew of image but doesn't save it code from D. Pardal and Axel Jorgensen of https://stackoverflow.com/questions/22087076/how-to-make-a-simple-image-upload-using-javascript-html

function preview_image(event) {
            var reader = new FileReader();
            reader.onload = function(){
            var output = document.getElementById('output_image');
            output.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        }