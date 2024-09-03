const button = document.getElementById("button");
const square = document.querySelector(".sqaure"); // Use querySelector for class selection

function buttonClicked() {
    if (button.innerHTML === "ON") {
        button.innerHTML = "OFF";
        button.style.backgroundColor = "red";
        square.classList.add("animate"); // Add the animation class
    } else {
        button.innerHTML = "ON";
        button.style.backgroundColor = "green";
        square.classList.remove("animate"); // Remove the animation class
    }
}
