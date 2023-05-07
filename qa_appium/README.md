#Для автоматизации тестирования мобильных приложений на JavaScript с помощью Appium необходимо выполнить следующие шаги:

1. Установить Appium и необходимые зависимости:

npm install -g appium
npm install wd


2. Создать файл конфигурации для Appium:

const wd = require('wd');
const serverConfig = {
  host: 'localhost',
  port: 4723
};
const capabilities = {
  platformName: 'Android',
  platformVersion: '9',
  deviceName: 'Android Emulator',
  app: '/path/to/app.apk',
  automationName: 'UiAutomator2'
};
const driver = wd.promiseChainRemote(serverConfig);
driver.init(capabilities);


3. Написать тесты с использованием Appium:

describe('Login', function() {
  it('should login successfully', function() {
    return driver
      .elementById('username')
      .sendKeys('testuser')
      .elementById('password')
      .sendKeys('testpassword')
      .elementById('login-button')
      .click()
      .elementById('welcome-message')
      .text()
      .should.become('Welcome, testuser!');
  });
});


4. Запустить тесты с помощью Mocha:

mocha test.js
