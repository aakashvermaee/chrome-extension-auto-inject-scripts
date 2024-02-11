export const getItem = (k: keyof typeof globalThis) => {
  try {
    return globalThis[k];
  } catch (error) {
    console.log('----> error caught in global helper getItem', error);
  }
};

export const setItem = (k: keyof typeof globalThis, v: any) => {
  try {
    Object.assign(globalThis, { [k]: v });
  } catch (error) {
    console.log('----> error caught in global helper setItem', error);
  }
};

export const _setInterval = (handler: TimerHandler, timeout: number, ...args: any[]) => {
  try {
    const intervalId = setInterval(handler, timeout, args);

    globalThis.intervalIds = globalThis.intervalIds ?? [];
    globalThis.intervalIds.push(intervalId);

    return intervalId;
  } catch (error) {
    console.log('----> error caught in global helper setInterval', error);
  }
};

export const _clearInterval = () => {
  try {
    for (const id of intervalIds) {
      clearInterval(id);
    }
  } catch (error) {
    console.log('----> error caught in global helper clearInterval', error);
  }
};
