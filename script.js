// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function() {
    const cvSection = document.getElementById("cv");

    // Apply a fixed height and enable scrolling
    cvSection.style.height = "600px";  // Adjust the height as needed
    cvSection.style.overflowY = "scroll";
    cvSection.style.border = "1px solid #ddd"; // Optional, adds a border around the CV
});
