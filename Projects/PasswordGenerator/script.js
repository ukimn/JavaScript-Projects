const result = document.getElementById("result");


function generatePassowrd(length, lowerCase, upperCase, numbers, symbols){

    const lowercase = "qwertyuiopasdfghjklzxcvbnm";
    const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const numbersChars =  "0123456789"
    const symbol = "!#$%^&*()_+";

    let allowedChars = "";
    let passwordD = "";

    allowedChars += lowerCase ? lowercase : "";
    allowedChars += upperCase ? uppercase : "";
    allowedChars += numbers ? numbersChars : "";
    allowedChars += symbols ? symbol : "";

    if(length <= 0){
        return `(password length must be at least 1)`
    }

    if(allowedChars === 0){
        return `(password settings you should select at least one option)`
    }

    for(let i = 0; i <= length; i++){
        
        const randomIndex = Math.trunc(Math.random() * allowedChars.length)
        passwordD += allowedChars[randomIndex];

    }

    result.textContent = `Generated Password: ${passwordD}`;

    

}

const passwordLength = 13;
const lowerCaseChars = true;
const upperCaseChars = true;
const includeNumber = true;
const includeSymbols = true;


