const body = document.body;
const animateButton = document.querySelector('button:nth-of-type(4)');

function changeToRed() {
    body.style.backgroundColor = "red";
    body.classList.remove('animate');
}

function changeToBlack() {
    body.style.backgroundColor = "black";
    body.classList.remove('animate');
}

function changeToBlue() {
    body.style.backgroundColor = "blue";
    body.classList.remove('animate');
}

function toggleAnimation() {
    if (body.classList.contains('animate')) {
        body.classList.remove('animate');
        body.style.backgroundColor = ""; 
    } else {
        body.classList.add('animate');
    }
}
