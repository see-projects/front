import { v4 as uuidv4 } from 'uuid';

export const makeState = (provider: string) => {
  const payload = JSON.stringify({ provider, nonce: uuidv4() });
  return encodeURIComponent(btoa(payload));
};

export const verifyState = (state: string) => {
  try {
    const decodedState = decodeURIComponent(state);
    const payload = atob(decodedState);
    return JSON.parse(payload);
  } catch (e) {
    console.error(e);
    return null;
  }
};
