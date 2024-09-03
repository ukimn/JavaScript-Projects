const textBox = document.getElementById("textBox");
const result = document.getElementById("result");

let letter;

function displayUnicode(){
    letter = textBox.value;
    result.textContent = `${letter} its unicode is ${letter.charCodeAt()}`;
    if(letter === ""){
        result.textContent = "Enter a character Please!";
    }
}