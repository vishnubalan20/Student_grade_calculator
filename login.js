document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === 'student' && password === 'password123') {
        window.location.href = 'grade.html';
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});
