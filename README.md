**Prerequisties**

Nodejs stable version should be installed on local machine

Verify the same by running below commands

node --version

npm --version


**Tech Stack**

WebdriverIO (JavaScript based framework) is used.

WebdriverIO has inbuilt assertion library and Test Runner support.

Mocha (describe,it syntax ) is used to write test cases.

Page Object model is used to design tests .

All the test configuration(base url, chrome options) is present in wdio.conf.js file in root directory.


**Setting up locally**

1) Clone the repo to your local
2) run npm ci command
3) npm run test
4) Verify that spec files are getting passed
5) Verify the screenshots(one with popup and one without) in screenshots directory
