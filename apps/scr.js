function createiPhone(screenshotUrl, index) {
  return `
        <div class="iphone">
            <div class="iphone-small-round-top"></div>
            <div class="iphone-round-top-left"></div>
            <div class="iphone-speaker"></div>
            <img src="${screenshotUrl}" class="iphone-screenshot" alt="Screenshot ${index + 1}">
            <div class="iphone-button"></div>
        </div>
    `;
}

function loadScreenshots() {
  const container = document.getElementById('phoneContainer');
  container.innerHTML = screenshotUrls.map((url, index) => createiPhone(url, index)).join('');
}

// Load screenshots when page loads
document.addEventListener('DOMContentLoaded', loadScreenshots);

function addScreenshot(url) {
  const container = document.getElementById('phoneContainer');
  const newPhone = createiPhone(url, screenshotUrls.length);
  container.innerHTML += newPhone;
  screenshotUrls.push(url);
}

function updateScreenshots(newUrls) {
  screenshotUrls.length = 0;
  screenshotUrls.push(...newUrls);
  loadScreenshots();
}