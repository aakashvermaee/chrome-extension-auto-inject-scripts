import { TAB_STATUS } from './config/app-constants';
import register from './scripts/register';
import unregister from './scripts/unregister';

console.log(`----> Loading background scripts`);

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status !== TAB_STATUS.COMPLETE) return;

  try {
    await register(tabId, tab);
  } catch (error) {
    console.log('----> error caught in chrome.tabs.onUpdated', error);
  }
});

chrome.tabs.onRemoved.addListener(async (tabId, removeInfo) => {
  try {
    if (removeInfo.isWindowClosing) {
      await unregister(tabId);
    }
  } catch (error) {
    console.log('----> error caught in chrome.tabs.onRemoved', error);
  }
});
