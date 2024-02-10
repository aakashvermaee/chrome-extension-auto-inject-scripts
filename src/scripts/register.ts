import * as yt from './inject-yt';
import * as netflix from './inject-netflix';

export default async function (tabId: number, tab: chrome.tabs.Tab) {
  if (tab.url?.includes('youtube')) {
    await chrome.scripting.executeScript({
      target: { tabId },
      func: yt.register,
      args: [tabId]
    });
    return;
  }

  if (tab.url?.includes('netflix')) {
    await chrome.scripting.executeScript({
      target: { tabId },
      func: netflix.register,
      args: [tabId]
    });
    return;
  }
}
