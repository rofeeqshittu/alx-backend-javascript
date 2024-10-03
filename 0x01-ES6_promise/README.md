# ES6 Promises Project

## Overview
This project introduces **ES6 Promises** in JavaScript, focusing on asynchronous programming. It covers Promises, `then`, `catch`, `await`, and `async` functions, providing hands-on tasks that deal with API responses, error handling, and multiple Promises resolution.

![promises-async-wait-meme.jpeg](One simply does not use async/await without knowing promises)

## Concepts
- Promises (what they are, how and why to use them)
- `then`, `resolve`, `catch` methods
- Throw / Try
- The `await` operator
- Async functions

## Tasks

| Filename | Description |
| --- | --- |
| [0-promise.js](./0-promise.js) | Return a Promise using the `getResponseFromAPI()` function. |
| [1-promise.js](./1-promise.js) | Return a promise that resolves or rejects based on a boolean input. |
| [2-then.js](./2-then.js) | Append handlers to a promise and log responses. |
| [3-all.js](./3-all.js) | Handle multiple successful promises and log user info. |
| [4-user-promise.js](./4-user-promise.js) | Return a resolved promise with a user object. |
| [5-photo-reject.js](./5-photo-reject.js) | Reject a promise with an error based on a filename. |
| [6-final-user.js](./6-final-user.js) | Handle multiple promises and return their statuses. |
| [7-load_balancer.js](./7-load_balancer.js) | Return the fastest resolved promise from multiple downloads. |
| [8-try.js](./8-try.js) | Throw an error if dividing by zero, otherwise return the result. |
| [9-try.js](./9-try.js) | Implement a function to process math operations with error handling. |
| [100-await.js](./100-await.js) | Use `async`/`await` to manage multiple asynchronous tasks and handle errors. |

## Requirements
- NodeJS 12.11.x
- Code will be tested using Jest and ESLint.
- Editors: vi, vim, emacs, Visual Studio Code.
- Ensure code ends with a new line and all functions are exported.

## Setup
1. Install NodeJS 12.11.x:
    ```bash
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    nodejs -v  # v12.11.1
    npm -v     # 6.11.3
    ```
2. Install Jest, Babel, and ESLint using the `package.json`:
    ```bash
    npm install
    ```

## Response Data Format
- `uploadPhoto`: `{ status: 200, body: 'photo-profile-1' }`
- `createUser`: `{ firstName: 'Guillaume', lastName: 'Salva' }`

