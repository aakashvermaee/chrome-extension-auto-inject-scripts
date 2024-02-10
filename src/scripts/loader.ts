import injectYt from "./inject-yt";
import injectNetflix from "./inject-netflix";

export default async function (tabId: number, tab: chrome.tabs.Tab) {
  if (tab.url?.includes("youtube")) {
    await chrome.scripting.executeScript({
      target: { tabId, allFrames: true },
      func: injectYt,
    });
    return;
  }
  if (tab.url?.includes("netflix")) {
    await chrome.scripting.executeScript({
      target: { tabId, allFrames: true },
      func: injectNetflix,
    });
    return;
  }
}
