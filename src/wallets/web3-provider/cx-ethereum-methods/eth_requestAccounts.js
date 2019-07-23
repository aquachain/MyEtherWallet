/* eslint no-undef: 0 no-console:0 */
import { toPayload } from '../jsonrpc';
import {
  WEB3_RECEIVE_ACC,
  WEB3_REJECT,
  WEB3_GET_ACC
} from '@/builds/mewcx/cxHelpers/cxEvents.js';
export default async ({ payload }, res, next) => {
  if (payload.method !== 'eth_requestAccounts') return next();
  console.log('I GOT HERE MF');
  const id = window.extensionID;
  const callerUrl = window.location.hostname;
  const event = new CustomEvent(WEB3_GET_ACC.replace('{{id}}', id), {
    detail: {
      from: callerUrl
    }
  });
  window.dispatchEvent(event);
  window.addEventListener(WEB3_RECEIVE_ACC.replace('{{id}}', id), function(
    eventRes
  ) {
    res(null, toPayload(payload.id, [eventRes.detail.account]));
    this.removeEventListener(WEB3_RECEIVE_ACC.replace('{{id}}', id), () => {});
    this.removeEventListener(WEB3_REJECT.replace('{{id}}', id), () => {});
  });

  window.addEventListener(WEB3_REJECT.replace('{{id}}', id), function() {
    this.removeEventListener(WEB3_RECEIVE_ACC.replace('{{id}}', id), () => {});
    this.removeEventListener(WEB3_REJECT.replace('{{id}}', id), () => {});
    res(null, toPayload(payload.id, new Error('User cancelled request!')));
  });
};