document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessageDiv = document.getElementById('password-match-error');

    errorMessageDiv.textContent = '';

    if (password !== confirmPassword) {
        errorMessageDiv.textContent = 'Passwords do not match!';
        return;
    }

    alert('Registration successful! Redirecting to address entry.');
    window.location.href = 'src/pages/addresses.html';
});