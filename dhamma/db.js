const links = {
  "b-home": "https://bahd.eu.org",
  "b-about": "https://bahd.eu.org/about",
  "b-cc": "https://bahd.eu.org/contact",
  "b-faq": "https://bahd.eu.org/faqs",
  "b-fb": "https://facebook.com/bahdorg",
  "b-x": "https://x.com/dhammaapp",
  "b-privacy": "https://bahd.eu.org/legal/privacy",
  "b-terms": "https://bahd.eu.org/legal/terms"
};

document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the `data-link` attribute
  document.querySelectorAll('[data-link]').forEach(element => {
    const key = element.getAttribute('data-link');
    if (links[key]) {
      element.style.cursor = "pointer"; // Change cursor to indicate clickable
      element.addEventListener('click', () => {
        window.location.href = links[key]; // Navigate to the target URL
      });
    } else {
      element.style.cursor = "default"; // Default cursor for non-clickable elements
      element.addEventListener('click', () => {
        console.warn('No link found for this data-link');
      });
    }
  });
});