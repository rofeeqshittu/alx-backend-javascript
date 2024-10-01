# 0x00. ES6 Basics

## Concepts
This project is focused on the following concepts in JavaScript:
- **JavaScript ES6 programming**
- **Software Linter**

## Learning Objectives
By the end of this project, you will be able to explain:
- What ES6 is and its new features
- The difference between `const` and `let`
- Block-scoped variables
- Arrow functions
- Rest and spread parameters
- String templating in ES6
- Object creation in ES6
- Iterators and the `for-of` loop

## Project Setup
1. **Node.js 12.11.x** is required. You can install it with:
    ```bash
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    ```
2. Verify installation:
    ```bash
    node -v
    npm -v
    ```

3. **Install Jest, Babel, and ESLint** in your project directory:
    ```bash
    npm install
    ```

4. **Configuration Files**: The project comes with the following configuration files:
   - [`package.json`](./package.json)
   - [`babel.config.js`](./babel.config.js)
   - [`.eslintrc.js`](./.eslintrc.js)

---

## Tasks

| Task No | Description | File Name | Link |
|---------|-------------|-----------|------|
| 0 | Modify functions to use `const` and `let` appropriately. | `0-constants.js` | [0-constants.js](./0-constants.js) |
| 1 | Use block-scoped variables to avoid hoisting issues. | `1-block-scoped.js` | [1-block-scoped.js](./1-block-scoped.js) |
| 2 | Convert the add function to use ES6 arrow functions. | `2-arrow.js` | [2-arrow.js](./2-arrow.js) |
| 3 | Condense the function using default parameters. | `3-default-parameter.js` | [3-default-parameter.js](./3-default-parameter.js) |
| 4 | Modify function to use rest parameter syntax to count arguments. | `4-rest-parameter.js` | [4-rest-parameter.js](./4-rest-parameter.js) |
| 5 | Concatenate arrays and strings using spread syntax. | `5-spread-operator.js` | [5-spread-operator.js](./5-spread-operator.js) |
| 6 | Use template literals to rewrite string construction. | `6-string-interpolation.js` | [6-string-interpolation.js](./6-string-interpolation.js) |
| 7 | Use shorthand syntax for object properties. | `7-getBudgetObject.js` | [7-getBudgetObject.js](./7-getBudgetObject.js) |
| 8 | Use computed property names in objects. | `8-getBudgetCurrentYear.js` | [8-getBudgetCurrentYear.js](./8-getBudgetCurrentYear.js) |
| 9 | Define methods using the new ES6 method property syntax. | `9-getFullBudget.js` | [9-getFullBudget.js](./9-getFullBudget.js) |
| 10 | Refactor the function to use ES6 method definition and string interpolation. | `10-getFullBudget.js` | [10-getFullBudget.js](./10-getFullBudget.js) |
| 11 | Create a class that contains the constructor and method to handle budgets. | `11-classBudget.js` | [11-classBudget.js](./11-classBudget.js) |
| 12 | Refactor the class to use inheritance with an extended class. | `12-classRoom.js` | [12-classRoom.js](./12-classRoom.js) |
| 13 | Use a symbol to define a unique identifier for the class. | `13-symbols.js` | [13-symbols.js](./13-symbols.js) |
| 14 | Write a module to export a function and use import/export syntax. | `14-export-import.js` | [14-export-import.js](./14-export-import.js) |
| 15 | Modify function to use named exports and imports. | `15-named-import-export.js` | [15-named-import-export.js](./15-named-import-export.js) |

---

