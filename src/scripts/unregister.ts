import * as injectNetflix from './inject-netflix';

export default async function (tabId: number) {
  await chrome.scripting.executeScript({
    target: { tabId, allFrames: true },
    func: injectNetflix.unregister,
    args: [tabId]
  });
  return;
}
