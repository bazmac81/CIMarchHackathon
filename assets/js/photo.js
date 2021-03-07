
// // https://www.youtube.com/watch?v=eN0c-xQmTo4
// const a = document.getElementById("load");

// function readUrl(input){
//     // the hello world program
// console.log('Hello');

//     if(input.files){
//         // the hello world program
//         console.log('Hello World');
//         const reader = new FileReader();
//         reader.readAsDataURL(input.files[0]);
//         // the hello world program
// console.log(input.files);

//         reader.onload=(e)=>{
//             // the hello world program
// console.log(e.target.result);

//             a.src = e.target.result
//             // the hello world program
// console.log('drop');

//         }
//     }
// }


// const myForm = document.getElementById("myForm")
// const inpFile = document.getElementById("inpFile")

// myForm.addEventListener("submit", e => {
//     e.preventDefault();

//     const endpoint = "upload.php";
//     const formData = "FormData()";

//     console.log(inpFile.files)

//     formData.append("inpFile", inpFile.files[0]);

//     fetch(endpoint, {
//         method: "post",
//         body: formData
//     }).catch(console.error);

// })

// working prevew of image but doesn't save it

function preview_image(event) {
            var reader = new FileReader();
            reader.onload = function(){
            var output = document.getElementById('output_image');
            output.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        }