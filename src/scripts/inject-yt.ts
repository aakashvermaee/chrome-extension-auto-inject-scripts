import { SELECTORS } from '../config/app-constants';

export function register(tabId: number) {
  console.log('----> Start injecting YouTube scripts');

  document.onkeyup = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.key === '[' && e?.target?.id !== SELECTORS.YT_SEARCH_BOX) {
      document.querySelector<HTMLButtonElement>(SELECTORS.YT_GUIDE_BTN)?.click();
    }
  };

  console.log('----> finished injecting YouTube scripts');
}
