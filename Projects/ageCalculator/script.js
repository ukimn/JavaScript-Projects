document.querySelector('#submitButton').addEventListener('click', function() {
    let realAge = parseInt(document.querySelector('#textBox').value, 10);
    
    if (isNaN(realAge) || realAge < 0) {
        alert('Please enter a valid age.');
        return;
    }

    let day = realAge * 365;
    let hour = day * 24;
    let totalSeconds = hour * 60 * 60;

    document.querySelector('#days').textContent = `Days: ${day}`;
    document.querySelector('#hours').textContent = `Hours: ${hour}`;
    document.querySelector('#seconds').textContent = `Seconds: ${totalSeconds}`;

    setInterval(function() {
        let now = new Date();
        let seconds = now.getSeconds();
        let minutes = now.getMinutes();
        let hours = now.getHours();
        
        let currentTotalSeconds = (hours * 3600) + (minutes * 60) + seconds;
        
        
        document.querySelector('#seconds').textContent = `Seconds: ${currentTotalSeconds}`;
    }, 1000);
});


