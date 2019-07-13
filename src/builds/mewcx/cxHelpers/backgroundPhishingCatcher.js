import cxHelpers from './cxHelpers';
const chrome = window.chrome;
(function() {
  /* eslint no-undef: 0 no-console:0 */
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tabs) {
    querycB(tabs);
  });

  chrome.tabs.onActivated.addListener(cb);
  chrome.tabs.onUpdated.addListener(cb);

  function cb() {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(
      tabs
    ) {
      querycB(tabs);
    });
  }

  function querycB(tabs) {
    const SEARCH_STRING = ['myetherwallet'];
    const ealBlacklisted = Object.assign({}, cxHelpers.blackListDomains['eal']),
      iosiroBlacklisted = Object.assign(
        {},
        cxHelpers.blackListDomains['iosiro']
      ),
      phishfortBlacklisted = Object.assign(
        {},
        cxHelpers.blackListDomains['phishfort']
      ),
      mewBlacklisted = Object.assign({}, cxHelpers.blackListDomains['mew']),
      ealWhitelisted = Object.assign({}, cxHelpers.whiteListDomains['eal']),
      mewWhitelisted = Object.assign({}, cxHelpers.whiteListDomains['mew']);

    let allBlacklistedDomains = [];
    let allWhitelistedDomains = [];
    allBlacklistedDomains = ealBlacklisted.domains
      .concat(iosiroBlacklisted.domains)
      .concat(phishfortBlacklisted.domains)
      .concat(mewBlacklisted.domains);
    allWhitelistedDomains = mewWhitelisted.domains.concat(
      ealWhitelisted.domains
    );

    let urlRedirect;
    const foundWhitelist = allWhitelistedDomains.find(dom => {
      if (tabs.length > 0) {
        return dom === cxHelpers.extractRootDomain(tabs[0].url);
      }
    });
    const foundBlacklist = allBlacklistedDomains.find(dom => {
      if (tabs.length > 0) {
        return dom === cxHelpers.extractRootDomain(tabs[0].url);
      }
    });

    if (foundWhitelist === undefined) {
      if (
        foundBlacklist !== undefined ||
        cxHelpers.checkUrlSimilarity(tabs[0].url, SEARCH_STRING)
      ) {
        urlRedirect = encodeURI(
          `https://www.myetherwallet.com/phishing.html?phishing-address=${tabs[0].url}`
        );
        chrome.tabs.update(null, { url: urlRedirect });
      }
    }
  }
})();