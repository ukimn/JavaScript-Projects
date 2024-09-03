const textBox = document.getElementById("textBox");
const textBoxTwo = document.getElementById("textBoxTwo");
const result = document.getElementById("result");
const precentage = document.getElementById("buttonSelect");
const number = document.getElementById("buttonSelectt");

let value;
let finalResult;

function whenButtonClicked(){

    value = Number(textBoxTwo.value);

    if(precentage.checked){
        finalResult = value * 100 / Number(textBoxTwo.value);
        result.textContent = `the precentage of ${value} is ${finalResult}%`
    }else if(number.checked){
        finalResult = value / 100 * Number(textBoxTwo.value);
        result.textContent = `the precentage of ${value} is ${finalResult}%`;
    }else if(textBox.value === ""){
        result.textContent = `Type Something!`;
    }else if(!precentage.checked && !number.checked){
        result.textContent = `Choose an option!`;
    }
}