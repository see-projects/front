import { v4 as uuidv4 } from 'uuid';

export const makeState = (provider: string) => {
  const payload = JSON.stringify({ provider, nonce: uuidv4() });
  return encodeURIComponent(btoa(payload));
};
