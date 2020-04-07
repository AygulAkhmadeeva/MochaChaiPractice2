### Unit Testing using Mocha and Chai (NodeJS)
* [Functions] (index.js)
* [Tests] (test/index.spec.js)
#### 1. Overview

The purpose of this project is to learn how to use Mocha/Chai to do unit tests in NodeJS.<br/>

Mocha and Chai are two JavaScript frameworks commonly used together for unit testing. <br/>

Mocha is a feature-rich JavaScript test framework running on Node js and in the browser. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases in the terminal.<br/>

Chai is an assertion library that is often used alongside Mocha. It provides functions and methods that help you compare the output of a certain test with its expected value. Chai provides natural language assertions, expressive and readable style.

#### 2. Prerequisites
##### 2.1. Node
Install the node.js LTS version from Node website <br/>

##### 2.2 Npm
Npm gets installed along with node automatically. In order to initialize it, the below command should be run in Terminal:
*npm init*

The following commands can be used to check the successful installation of node and npm:<br/>

*npm -v // will return installed npm version*

*node -v // will return installed node version*

##### 2.3 Mocha installation

Run the below command in terminal:<br/>

*npm install mocha* </br>

Write the following command at the top of the file where the tests are expected to be in order to switch on Mocha:

*const assert = require('assert');*

##### 2.4 Chai installation
Run the below commands in terminal or cmd:</br>

*npm install chai* </br>

Write the following command at the top of the file where the tests are expected to be in order to switch on Chai:

*const {expect} = require('chai');*

#### Eslint installation
Run the below commands in terminal or cmd:</br>
*npm install eslint --save-dev*

To initialize Eslint, run the below commands in terminal or cmd:</br>
*npx eslint --init*  </br>

Answer questions.

Settings -> Eslint -> switch to 'Automatic'.

Add *"jest": true* to eslintc.json file.

Add eslintc.json to Git; </br>

In order to fix problems marked by Eslint: right click on the code -> Fix Eslint problems.