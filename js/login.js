document.getElementById('show-signup').addEventListener('click', function() {
    document.querySelector('.sign-in').style.display = 'none';
    document.querySelector('.sign-up').style.display = 'none';
    document.getElementById('signup-form').style.display = 'flex';
    document.getElementById('signini').style.display = 'flex';
});

document.getElementById('show-login').addEventListener('click', function() {
    document.querySelector('.sign-in').style.display = 'flex';
    document.querySelector('.sign-up').style.display = 'flex';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('signini').style.display = 'none';
});