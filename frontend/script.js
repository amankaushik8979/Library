// Ensure the script runs after the DOM is fully loaded
window.onload = function() {
    // Handle cancel button in the login form
    const cancelButton = document.getElementById("cancelButton");
    if (cancelButton) {
        cancelButton.addEventListener("click", function() {
            // Redirect back to index.html when the cancel button is clicked
            window.location.href = "index.html"; // Path to index.html
        });
    }

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent the default form submission

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Perform a basic login check (this would be replaced with an actual authentication check in a real app)
            if (username === "admin" && password === "admin") {
                // Redirect to adminHomepage.html if login is successful
                window.location.href = "adminHomepage.html"; // Path to the admin home page
            } else {
                // Display an error message if login fails
                document.getElementById("loginMessage").innerText = "Invalid username or password.";
            }
        });
    }

    const loginForm2 = document.getElementById("loginForm2");
    if (loginForm2) {
        loginForm2.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent the default form submission

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Perform a basic login check (this would be replaced with an actual authentication check in a real app)
            if (username === "user" && password === "user") {
                // Redirect to adminHomepage.html if login is successful
                window.location.href = "userHomepage.html"; // Path to the admin home page
            } else {
                // Display an error message if login fails
                document.getElementById("loginMessage").innerText = "Invalid username or password.";
            }
        });
    }

    // Handle admin and user login buttons on the index page
    const adminLoginButton = document.getElementById("adminLogin");
    if (adminLoginButton) {
        adminLoginButton.addEventListener("click", function() {
            window.location.href = "adminlogin.html"; // Path to the admin login page
        });
    }

    const userLoginButton = document.getElementById("userLogin");
    if (userLoginButton) {
        userLoginButton.addEventListener("click", function() {
            window.location.href = "userlogin.html"; // Path to the user login page
        });
    }

    const backButton = document.getElementById("backButton");
    if (backButton) {
        backButton.addEventListener("click", function() {
            window.location.href = "transaction.html"; // Redirect to transaction.html
        });
    }

    // Handle Search button
    const searchButton = document.getElementById("searchButton");
    if (searchButton) {
        searchButton.addEventListener("click", function() {
            window.location.href = "isbooksearch.html"; // Redirect to isbooksearch.html
        });
    }

    

    // Handle logout button on admin home page
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
            window.location.href = "index.html"; // Path to index.html
        });
    }
};
