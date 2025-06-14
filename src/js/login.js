document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorMessageDiv = document.getElementById('login-error');

    errorMessageDiv.textContent = '';

    if (email === 'test@example.com' && password === 'password123') {
        alert('Login successful! Redirecting to home page.');
        window.location.href = 'home.html';
    } else {
        errorMessageDiv.textContent = 'Invalid email or password.';
    }
});