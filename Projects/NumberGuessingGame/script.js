const textBox = document.getElementById("textBox");
const result = document.getElementById("result");
let computerPick = Math.trunc(Math.random() * 100);

let playerPick;

function guessedNumber(){
    playerPick = Number(textBox.value);

    if(playerPick === computerPick){
        result.textContent = `You Did it Nice Answer\nYour Number is ${playerPick} and the computer Pick is ${computerPick}`;
    }else{
        result.textContent = `Wrong the computer pick is ${computerPick}`;
    }

    if(playerPick > computerPick){
        result.textContent = "TOO HIGH!";
    }else if(playerPick < computerPick){
        result.textContent = "TOO LOW!";
    }

    if(playerPick > 100){
        result.textContent = "Look Down!";
    }else if(playerPick < 1){
        result.textContent = "Look Down!";
    }else if(textBox.value === ""){
        result.textContent = "Look Down Please!";
    }
}

function ShowComputerPick(){
    result.textContent = `the computer number is ${computerPick}`;
}