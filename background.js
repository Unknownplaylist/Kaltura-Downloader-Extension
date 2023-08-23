let isTabsActive = false;
let listenerAdded = false;

// Load initial state from storage
chrome.storage.sync.get("isEnabled", data => {
  isTabsActive = data.isEnabled || false;

  if (isTabsActive) {
    addListener();
  }
});

chrome.storage.onChanged.addListener(changes => {
  if (changes.isEnabled) {
    isTabsActive = changes.isEnabled.newValue;
    if (isTabsActive) {
      addListener();
    } else {
      removeListener();
    }
  }
});

function addListener() {
  if (!listenerAdded) {
    chrome.webRequest.onCompleted.addListener(onWebRequestCompleted, { urls: ["<all_urls>"] });
    listenerAdded = true;
    console.log("Listener added");
  }
}

function removeListener() {
  if (listenerAdded) {
    chrome.webRequest.onCompleted.removeListener(onWebRequestCompleted);
    listenerAdded = false;
    console.log("Listener removed");
  }
}

function onWebRequestCompleted(details) {
  if (details.tabId !== -1 && details.method === "GET" && details.url.endsWith("seg-1-v1-a1.ts")) {
    openModifiedSegmentRequest(details.url);
  }
}

function openModifiedSegmentRequest(originalUrl) {
  const modifiedUrl = originalUrl.replace("/p/", "/pd/");
  downloadSegment(modifiedUrl);
}

function downloadSegment(url) {
  const filename = url.substring(url.lastIndexOf("/") + 1);
  const downloadOptions = {
    url: url,
    filename: filename,
    saveAs: false, // Set to true if you want to show the "Save As" dialog
  };

  chrome.downloads.download(downloadOptions, () => {
    // Handle download completion if needed
  });
}

