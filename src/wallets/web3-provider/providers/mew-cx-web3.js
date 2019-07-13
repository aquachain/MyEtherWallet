import HttpRequestManger from '../providers/http-request-manager';
import MiddleWare from '../middleware';
import {
  ethAccounts,
  ethCoinbase,
  ethSendTransaction,
  ethSign
  // ethSignTransaction,
  // ethGetTransactionCount,
  // ethGetTransactionReceipt
} from '../cx-methods';
class MewCxWeb3 {
  constructor(host) {
    const requestManager = new HttpRequestManger(host, {});
    this.httpProvider = {
      send: (payload, callback) => {
        const req = {
          payload,
          requestManager
        };
        const middleware = new MiddleWare();
        middleware.use(ethSendTransaction);
        // middleware.use(ethSignTransaction);
        // middleware.use(ethGetTransactionCount);
        // middleware.use(ethGetTransactionReceipt);
        middleware.use(ethSign);
        middleware.use(ethAccounts);
        middleware.use(ethCoinbase);
        // middleware.use(ethGetBlockByNumber);
        // middleware.use(ethGetBlockNumber);
        // middleware.use(netVersion);
        middleware.run(req, callback).then(() => {
          requestManager.provider.send(payload, callback);
        });
      }
    };
    return this.httpProvider;
  }
}
export default MewCxWeb3;