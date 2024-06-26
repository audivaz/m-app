document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get the username and password values
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Simulate an authentication process (replace this with actual authentication logic)
    if (username === 'testuser' && password === 'password123') {
        // Successful login
        window.location.href = 'index.html'; // Redirect to home page
    } else {
        // Failed login
        alert('Invalid username or password. Please try again.');
    }
});
