const path = require("path");
// const extensionLoader = require("cypress-browser-extension-plugin/loader");
// module.exports = (on) => {
//   on("before:browser:launch", extensionLoader.load("./Phantom.crx"));
// };

// export {};

module.exports = (on, config) => {
  on("before:browser:launch", (browser, launchOptions) => {
    // supply the absolute path to an unpacked extension's folder
    // NOTE: extensions cannot be loaded in headless Chrome
    console.log("loading extension .......");
    launchOptions.extensions.push(path.resolve(__dirname, "./Phantom"));

    return launchOptions;
  });
};
export {};
