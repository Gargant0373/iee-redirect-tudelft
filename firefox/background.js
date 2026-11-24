const ORIGINAL_HOST = "ieeexplore.ieee.org";
const PROXY_HOST    = "ieeexplore-ieee-org.tudelft.idm.oclc.org";

browser.webRequest.onBeforeRequest.addListener(
  details => {
    const url = new URL(details.url);
    if (url.hostname !== ORIGINAL_HOST) {
      return {};
    }

    url.protocol = "https:";
    url.hostname = PROXY_HOST;
    url.port = "";
    return { redirectUrl: url.toString() };
  },
  {
    urls: ["*://ieeexplore.ieee.org/*"],
    types: ["main_frame", "sub_frame"]
  },
  ["blocking"]
);
