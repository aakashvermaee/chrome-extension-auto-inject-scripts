// this is the background code...

import loader from "./scripts/loader";

// listen for our browerAction to be clicked
console.log(`----> Loading background scripts`);

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status !== "complete") return;
  await loader(tabId, tab);
});
