const textBox = document.getElementById("textBox");
const submitButton = document.getElementById("button");
const result = document.getElementById("result");

let password = 123456;
let isPasswordHere = true;

submitButton.addEventListener('click', function(){
    if(Number(textBox.value) === password){
        textBox.style.backgroundColor = "green";
        result.textContent = "Correct Password"
        result.style.color = "green";
    }else if(Number(textBox.value) === 11111 && isPasswordHere === true){
        result.textContent = "write the old password to create the new password";
        textBox.value = "";
        if(Number(textBox.value) === password){
            result.textContent = "Password is Correct";
            result.style.color = "green";        
        }
    }
    else {
        textBox.style.backgroundColor = "red";
        result.textContent = 'Wrong Password';
        result.style.color = "red";    
    }
})