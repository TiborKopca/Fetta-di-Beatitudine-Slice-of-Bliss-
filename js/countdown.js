
const countdownElement = document.getElementById('countdown');
// Set the date we're counting down to
const countDownDate = new Date('August 2, 2024 20:00:00').getTime();

// countdown.js
document.addEventListener('DOMContentLoaded', function() {

    // Update the count down every 1 second
    const x = setInterval(function() {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the time remaining
        const distance = countDownDate - now;
        // console.log(distance);
        // Calculate days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Display the result in the elements
        
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        // If the countdown is over, display a message
        if (distance <= 0) {
            clearInterval(x);
            // document.getElementById('countdown').innerHTML = "We're open now!";
            window.location.href = 'home.html'; // Redirect to the homepage
        }
    }, 1000);
});
