const toggleCheckbox = document.getElementById("toggleCheckbox");

chrome.storage.sync.get("isEnabled", data => {
  toggleCheckbox.checked = data.isEnabled;
});

toggleCheckbox.addEventListener("change", () => {
  const isEnabled = toggleCheckbox.checked;
  chrome.storage.sync.set({ isEnabled });

  if (isEnabled) {
    // Add the listener when enabled
    chrome.webRequest.onCompleted.addListener(
      function(details) {
        if (details.tabId !== -1 && details.method === "GET" && details.url.endsWith(".ts")) {
          openModifiedSegmentRequest(details.url);
          chrome.webRequest.onCompleted.removeListener(stopListener);
        }
      },
      { urls: ["<all_urls>"] }
    );
  } else {
    // Remove the listener when disabled
    chrome.webRequest.onCompleted.removeListener(stopListener);
  }
});

function openModifiedSegmentRequest(originalUrl) {
  const modifiedUrl = originalUrl.replace("/p/", "/pd/");
  chrome.tabs.create({ url: modifiedUrl });
}

function stopListener(details) {
  // This function does nothing; it's used to be passed as a parameter to removeListener
}

// Load initial state
chrome.storage.sync.get("isEnabled", data => {
  if (data.isEnabled) {
    chrome.webRequest.onCompleted.addListener(stopListener, { urls: ["<all_urls>"] });
  }
});
