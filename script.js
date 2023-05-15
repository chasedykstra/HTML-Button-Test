windows.addEventListener('DOMContentLoaded', function() {
    var splashScreen = document.getElementById('splash');
    setTimeout(function() {
        splashScreen.style.display = 'none';
    }, 2000);
});

function redirecttoYouTube() {
    window.location.href = 'https://www.youtube.com/@etvchannel';
    }