# Sprint 7 project

Write tests for GET, POST, PUT & DELETE requests. Run a test for both the response code and body of each request.  Add a README.md file to the root directory of the project.

 2.Setup
Before running the tests, make sure you have the following software installed:
--Postman & VS Code--

---Start by linking your Github account to Tripleten. From Github, clone the repo(hm07-qa-us)to your computer. Work with the project locally by running the command "npm install" from the console in your project folder. Use apiDOC to check endpoints ex .URL /docs/---

Configuration

---Deploy the API URL Server and paste the link in the config.js file(By doing so, it declares the URL in a single place)---
---Tests can be run by using VS Code. Open and select the hm07-qa-us folder in VS Code, tests can be written and run using the templates provided for GET, POST, PUT, DELETE----

4.Running the Tests
---Open the templates in the hm07-qa-us folder in VS Code. Start with GET followed by POST, PUT and DELETE. At minimum, 2 tests, 1 for response code and 1 for response body should be included in each request.  Make sure to paste the API URL server in the config.js. Once the tests have been written and saved, use the npx jest command to run the tests using the VS Code terminal---

Test cases 
GET, code=passed, body=passed
POST, code=passed, body=passed
PUT, code=passed, body=passed
DELETE, code=passed, body=passed

Code Style
The following style conventions are followed in the code:
---camelCase---