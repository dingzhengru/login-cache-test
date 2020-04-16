# login-cache-test
測試登入前與登入後的快取處理


```bash
npm install
npm start
```

## 排除快取的名單
*  於 workbox-config.js 中的 globIgnores 參數設定

workbox-config-injectManifest.js
```js
module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "**/*.{js,css,png,html}"
  ],
  "swDest": "sw.js",
  "swSrc": "sw-config.js",
  "globIgnores": [
    "node_modules/**", 
    "index-logged-in.html**"
  ]
};
```