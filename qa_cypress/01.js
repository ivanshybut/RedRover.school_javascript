// Cypress automation testing
// Now, install the webdriverio package via NPM:

// npm i --save-dev webdriverio
// Once this is done, your package.json file should include a section like the following:

// package.json
// {
//   "devDependencies": {
//     "webdriverio": "7.30.0"
//   }
// }
// Now it's time to type up the test itself. Create a new file called test.js with the following contents:

test.js
const {remote} = require('webdriverio');

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  'appium:appPackage': 'com.android.settings',
  'appium:appActivity': '.Settings',
};

const wdOpts = {
  host: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    const batteryItem = await driver.$('//*[@text="Battery"]');
    await batteryItem.click();
  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);