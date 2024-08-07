// app.js

function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (username === "" || password === "") {
        alert("Please fill in both fields");
        return;
    }

    // Check if the username already exists
    if (localStorage.getItem(username)) {
        alert("Username already exists");
        return;
    }

    // Store the user credentials in local storage
    localStorage.setItem(username, password);
    alert("Signup successful! You can now login.");
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username === "" || password === "") {
        alert("Please fill in both fields");
        return;
    }

    // Check the stored credentials
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        alert("Login successful!");
        // Redirect or perform actions after successful login
    } else {
        alert("Invalid username or password");
    }
}
