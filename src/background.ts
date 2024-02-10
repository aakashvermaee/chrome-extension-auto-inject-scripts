import { TAB_STATUS } from './config/app-constants';
import register from './scripts/register';
import unregister from './scripts/unregister';

console.log(`----> Loading background scripts`);

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status !== TAB_STATUS.COMPLETE) return;

  await register(tabId, tab);
});

chrome.tabs.onRemoved.addListener(async (tabId, removeInfo) => {
  if (removeInfo.isWindowClosing) {
    await unregister(tabId);
  }
});
