const textBox = document.getElementById("inputForm");
const radioOne = document.getElementById("radioOne");
const radioTwo = document.getElementById("radioTwo");
const submitButton = document.getElementById("submit");
const result = document.getElementById("p");

function handleSubmit(){
    let info = textBox.value;

    if(radioOne.checked){
        result.textContent = `${info.toUpperCase()}`;
    }else if(radioTwo.checked){
        result.textContent = `${info.toLowerCase()}`;
    }else if(!radioOne.checked && radioTwo.checked){
        result.textContent = `Please choose an option`;
    }else if(info === ""){
        result.textContent = `Please Write the scentence!`;
    }
}