# 0x06. Unittests in JS

## Overview

This project focuses on mastering unit testing and integration testing using JavaScript. We explore key tools such as Mocha, Chai, and Sinon to ensure robust and maintainable code. The project spans creating basic test cases, using spies and stubs, integrating async tests, and performing API integration testing.

By the end of the project, you will gain a comprehensive understanding of unit testing, how to test asynchronous functions, and integration testing with Node.js.

## Concepts

- Unit Testing: Testing individual units or components of code in isolation.
- Integration Testing: Testing combined units of code or external interactions.
- Assertion Libraries: Tools (e.g., Chai) used to verify if test conditions are met.
- Test Suites: A collection of test cases organized using `describe` blocks.
- Spies and Stubs: Methods to intercept and mock behaviors of functions during tests.
- Async Tests: Testing code that executes asynchronously, such as API calls or Promises.

## Tasks

| Task Number | Filename/Link                          | Description                                                                                       |
|-------------|----------------------------------------|---------------------------------------------------------------------------------------------------|
| 0           | [0-calcul.js](./0-calcul.js), [0-calcul.test.js](./0-calcul.test.js) | Write a function that rounds numbers and returns their sum. Write unit tests using Node.js `assert`. |
| 1           | [1-calcul.js](./1-calcul.js), [1-calcul.test.js](./1-calcul.test.js) | Enhance the function to support operations like SUM, SUBTRACT, and DIVIDE. Add organized test cases. |
| 2           | [2-calcul_chai.js](./2-calcul_chai.js), [2-calcul_chai.test.js](./2-calcul_chai.test.js) | Rewrite tests using Chai’s `expect` style for a Behavior-Driven Development (BDD) approach.         |
| 3           | [utils.js](./utils.js), [3-payment.js](./3-payment.js), [3-payment.test.js](./3-payment.test.js) | Use Sinon spies to validate the behavior of a payment function calling another function.            |
| 4           | [4-payment.js](./4-payment.js), [4-payment.test.js](./4-payment.test.js) | Replace spies with stubs to control function behavior and validate specific inputs and outputs.     |
| 5           | [5-payment.js](./5-payment.js), [5-payment.test.js](./5-payment.test.js) | Use `beforeEach` and `afterEach` hooks for reusable test setup and teardown.                       |
| 6           | [6-payment_token.js](./6-payment_token.js), [6-payment_token.test.js](./6-payment_token.test.js) | Write and test an asynchronous function with a resolved Promise. Use the `done` callback.          |
| 7           | [7-skip.test.js](./7-skip.test.js)     | Skip specific failing tests without removing or fixing them.                                      |
| 8           | [8-api/api.js](./8-api/api.js), [8-api/api.test.js](./8-api/api.test.js) | Perform basic integration testing with an Express API.                                            |
| 9           | [9-api/api.js](./9-api/api.js), [9-api/api.test.js](./9-api/api.test.js) | Add an endpoint with regex validation and test for valid/invalid cases.                           |
| 10          | [10-api/api.js](./10-api/api.js), [10-api/api.test.js](./10-api/api.test.js) | Extend the API with a `POST` endpoint and test for correct deep equality responses.                |

## Setup Environment

1. **Operating System**: Ubuntu 18.04 LTS
2. **Node.js**: Version 12.x.x
3. **Editor**: Any of your choice (e.g., VS Code, Vim).
4. **Packages**: 
   - Mocha: For writing test cases.
   - Chai: For assertions.
   - Sinon: For creating spies and stubs.
   - Express: For API development.
   - Request: For integration testing APIs.

Run the following commands to set up:
```bash
# Install dependencies
npm install

# Run tests
npm test
```
