const links = {
  "ls-home": "https://bahd.eu.org",
  "ls-about": "https://bahd.eu.org/about",
  "ls-cc": "https://bahd.eu.org/contact",
  "ls-faq": "https://bahd.eu.org/faqs",
  "ls-fb": "https://facebook.com/bahdorg",
  "ls-x": "https://x.com/dhammaapp",
  "ls-privacy": "https://bahd.eu.org/legal/privacy",
  "ls-terms": "https://bahd.eu.org/legal/terms"
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