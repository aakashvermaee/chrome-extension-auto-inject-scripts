export default async function loader(tabId, tab) {
  if (tab.url.includes("youtube")) {
    await scripts.loadYTScripts(tabId);
    return;
  }
  if (tab.url.includes("netflix")) {
    await scripts.loadNetflixScripts(tabId);
    return;
  }
}

const scripts = {
  loadYTScripts: async (tabId) => {
    console.log("----> Start injecting YouTube scripts");

    await chrome.scripting.executeScript({
      target: { tabId, allFrames: true },
      files: ["scripts/inject-yt.js"],
    });

    console.log("----> finished injecting YouTube scripts");
  },
  loadNetflixScripts: async (tabId) => {
    console.log("----> Start injecting Netflix scripts");

    await chrome.scripting.executeScript({
      target: { tabId, allFrames: true },
      files: ["scripts/inject-netflix.js"],
    });

    console.log("----> finished injecting Netflix scripts");
  },
};
