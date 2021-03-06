// https://www.youtube.com/watch?v=eN0c-xQmTo4
const a = document.getElementById("load");
function readUrl(input){
    if(input.file){
        const reader = new FileReader();
        reader.readAsDataURL(input.files[0]);
        reader.onload=(e)=>{
            a.src = e.target.result
        }
    }
}