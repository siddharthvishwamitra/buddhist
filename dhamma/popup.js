// Get elements
var popup = document.getElementById("popup");
var downloadLink = document.getElementById("downloadLink");
var downloadButton = document.getElementById("downloadButton");
var closePopup = document.getElementById("closePopup");

// Show the popup when clicking the download link
downloadLink.addEventListener("click", function() {
  popup.style.display = "block";
});

// Close the popup when clicking the close button
closePopup.addEventListener("click", function() {
  popup.style.display = "none";
});

// Show the download button when the popup is displayed
popup.addEventListener("click", function() {
  downloadButton.style.display = "block";
});