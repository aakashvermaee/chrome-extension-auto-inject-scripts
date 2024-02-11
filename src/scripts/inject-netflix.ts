import { SELECTORS } from '../config/app-constants';
import * as g from '../helpers/globals.helper';

export function register(tabId: number) {
  console.log('----> Start injecting Netflix scripts');

  g.setItem('tabId', tabId);
  g._setInterval(() => {
    const introBtn = document.querySelector<HTMLButtonElement>(SELECTORS.NETFLIX_SKIP_INTO_BTN);

    if (!introBtn) return;

    console.log('----> skipping intro');
    introBtn.click();
    console.log('----> skipped intro successfully');
  }, 1000);

  console.log('----> finished injecting Netflix scripts');
}

export function unregister(tabId: number) {
  if (globalThis.tabId !== tabId) return;

  console.log('----> Start unregistering Netflix scripts');

  g._clearInterval();

  console.log('----> Finished unregistering Netflix scripts');
}
