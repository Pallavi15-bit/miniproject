document.addEventListener("DOMContentLoaded", function () {
    const downloadButton = document.querySelector(".download-btn");

    downloadButton.addEventListener("click", function () {
        alert("Your download is starting... 🚀");
        
        // Optional: Log the download event to the console
        console.log("User clicked on the download button.");

        // Optional: Redirect to a different page after download
        setTimeout(() => {
            window.location.href = "thankyou.html"; // Redirect to a thank-you page (if needed)
        }, 3000);
    });
});

window.onload = function () {
    setTimeout(() => {
        window.location.href = "https://github.com/arpanghosal0160/miniprj/releases/download/v1.0/AAGNI-Setup.exe";
    }, 2000); // 2-second delay before download starts
};

