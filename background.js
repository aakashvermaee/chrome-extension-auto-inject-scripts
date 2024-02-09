// this is the background code...

// listen for our browerAction to be clicked
console.log(`----> Loading background scripts`);

const BASE_OPTIONS = { runAt: "document_end" };

chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  if (changeInfo.status !== "complete") return;

  if (tab.url.includes("youtube")) {
    console.log("tab", tab);
    chrome.tabs.executeScript(tab.id, {
      ...BASE_OPTIONS,
      file: "scripts/inject-yt.js",
    });
    return;
  }
  if (tab.url.includes("netflix")) {
    chrome.tabs.executeScript(tab.id, {
      ...BASE_OPTIONS,
      file: "scripts/inject-netflix.js",
    });
    return;
  }
});
