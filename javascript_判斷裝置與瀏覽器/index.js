function isBrowser(params) {
  const browser = {
    isEdge: /Edge/.test(navigator.userAgent),
    isSafari: /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent),
    isOpera: /OPR/.test(navigator.userAgent),
    isChrome: /Google Inc/.test(navigator.vendor),
    isChromeIOS: /CriOS/.test(navigator.userAgent),
    isFirefox: /Firefox/.test(navigator.userAgent),
  }
  for (const key in browser) {
    if (browser.hasOwnProperty(key) && browser[key]) {
      return key;
    }
  }
}

function isDevice(params) {
  const device = {
    isAndroid: /Android/.test(navigator.userAgent),
    isIOS: /(iPhone|iPad|iPod)/.test(navigator.platform),
  }
  for (const key in device) {
    if (device.hasOwnProperty(key) && device[key]) {
      return key;
    }
  }
}
