// loadComponents.js
document.addEventListener('DOMContentLoaded', function () {
    // Load header
    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', data);
        });
    
    // Load footer
    fetch('/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('beforeend', data);
        });
});
