import { SELECTORS } from '../config/app-constants';

export function register(tabId: number) {
  console.log('----> Start injecting Netflix scripts');

  globalThis.tabId = tabId;
  globalThis.intervalIds = globalThis.intervalIds ?? [];

  const intervalId: any = setInterval(() => {
    const introBtn = document.querySelector<HTMLButtonElement>(SELECTORS.NETFLIX_SKIP_INTO_BTN);
    introBtn?.click();
  }, 1000);

  intervalIds.push(intervalId);

  console.log('----> finished injecting Netflix scripts');
}

export function unregister(tabId: number) {
  if (globalThis.tabId !== tabId) return;

  console.log('----> Start unregistering Netflix scripts');

  for (const id of intervalIds) {
    clearInterval(id);
  }

  console.log('----> Finished unregistering Netflix scripts');
}
