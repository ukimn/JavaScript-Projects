const button = document.getElementById("counter");
const resetButton = document.getElementById("counterr");
const result = document.getElementById("result");

let counter = 0;

button.addEventListener('click', function(){
    counter++;
    result.textContent = counter;  
    if(counter === 100){
        result.textContent = "You clicked the button many times"
    }else if(counter === 150){
        result.textContent = "Stop!!"
    }
})

resetButton.addEventListener('click', function(){
    counter = 0;
    result.textContent = counter;
    alert("the counter reset")
})