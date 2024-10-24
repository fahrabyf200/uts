// validation.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Get form inputs
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Error message containers
    let usernameError = document.getElementById('usernameError');
    let passwordError = document.getElementById('passwordError');

    // Clear previous error messages
    usernameError.textContent = '';
    passwordError.textContent = '';

    // Validation flag
    let valid = true;

    // Check if username is empty
    if (username === '') {
        usernameError.textContent = 'Must be filled';
        valid = false;
    }

    // Check if password is empty
    if (password === '') {
        passwordError.textContent = 'Must be filled';
        valid = false;
    } else if (password.length < 5) {
        passwordError.textContent = 'Password is at least 5 characters';
        valid = false;
    } else if (!/\d/.test(password)) {
        passwordError.textContent = 'Password must consist of letters and numbers';
        valid = false;
    }

    // Prevent form submission if invalid
    if (!valid) {
        event.preventDefault();
    }
});
