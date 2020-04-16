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