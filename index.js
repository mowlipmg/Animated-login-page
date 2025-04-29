document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Define valid usernames and passwords
    const validUsers = {
        "admin": "password123",
        "mowli": "pmg@123#"
    };

    // Check login credentials
    if (validUsers.hasOwnProperty(username) && validUsers[username] === password) {
        alert("Login successful!");
        errorMessage.textContent = "";
        window.location.href = "dashboard.html"; // Redirect to another page (optional)
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
});

