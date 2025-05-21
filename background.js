const ORIGINAL_HOST = "https://ieeexplore.ieee.org";
const PROXY_HOST    = "https://ieeexplore-ieee-org.tudelft.idm.oclc.org";

browser.webRequest.onBeforeRequest.addListener(
  details => {
    const url = details.url;

    if (url.startsWith(PROXY_HOST)) {
      return {};
    }

    if (url.startsWith(ORIGINAL_HOST)) {
      const redirectUrl = url.replace(ORIGINAL_HOST, PROXY_HOST);
      console.log("Redirecting:", url, "→", redirectUrl);
      return { redirectUrl };
    }

    return {};
  },
  { urls: ["*://ieeexplore.ieee.org/*"] },
  ["blocking"]
);
