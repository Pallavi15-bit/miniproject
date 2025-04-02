document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;

    // Simulating login validation
    if (name && email && contact) {
        alert("Login successful!");
        window.location.href = "download.html"; // Redirect to download page
    } else {
        alert("Please fill in all fields correctly.");
    }
});
