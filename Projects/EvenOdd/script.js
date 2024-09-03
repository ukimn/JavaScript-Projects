const textBox = document.getElementById("textBox");
const result = document.getElementById("result");

let number;

function evenOrOdd(){
    number = Number(textBox.value);
    if(number % 2 === 0){
        result.textContent = `${number} is Even`;
    }else if(number % 2 !== 0){
        result.textContent = `${number} is Odd`;
    }
}

function Delete(){
    textBox.value = "";
    result.textContent = "";
}