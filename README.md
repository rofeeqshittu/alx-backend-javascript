# ES6 Basics - JavaScript Project

This project is aimed at exploring the fundamental concepts of **ES6** (ECMAScript 2015) in JavaScript. The project involves the use of various new features in ES6 including arrow functions, template literals, default parameters, and more.

## Concepts Covered

- What is ES6
- New features introduced in ES6
- Constants vs Variables
- Block-scoped variables
- Arrow functions and function parameters
- Rest and Spread parameters
- String templating in ES6
- Object creation and properties
- Iterators and for-of loops

## Setup Instructions

To get started with the project, install **NodeJS 12.11.x** and all the dependencies. Follow the steps below:

1. Install NodeJS:

    ```bash
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    ```

2. Verify installation:

    ```bash
    nodejs -v
    npm -v
    ```

3. Install project dependencies:

    ```bash
    npm install
    ```

## Tasks and Files

### 0. Const or let?
Modify the variables in `taskFirst` to use `const` and in `taskNext` to use `let`.

- [0-constants.js](./0-constants.js)

### 1. Block Scope
Modify the variables inside `taskBlock` to ensure they are block-scoped.

- [1-block-scoped.js](./1-block-scoped.js)

### 2. Arrow Functions
Rewrite the function using ES6 arrow syntax in `getNeighborhoodsList`.

- [2-arrow.js](./2-arrow.js)

### 3. Default Parameters
Condense the function `getSumOfHoods` using default parameter values.

- [3-default-parameter.js](./3-default-parameter.js)

### 4. Rest Parameter Syntax
Modify the function to use the rest parameter and return the number of arguments.

- [4-rest-parameter.js](./4-rest-parameter.js)

### 5. Spread Syntax
Use the spread operator to concatenate arrays and characters of a string.

- [5-spread-operator.js](./5-spread-operator.js)

### 6. Template Literals
Rewrite the return statement using template literals in `getSanFranciscoDescription`.

- [6-string-interpolation.js](./6-string-interpolation.js)

### 7. Object Property Shorthand
Use shorthand syntax for object properties in `getBudgetObject`.

- [7-getBudgetObject.js](./7-getBudgetObject.js)

### 8. Computed Property Names
Use ES6 computed property names in `getBudgetForCurrentYear`.

- [8-getBudgetCurrentYear.js](./8-getBudgetCurrentYear.js)

### 9. ES6 Method Properties
Rewrite `getFullBudgetObject` using ES6 method properties.

- [9-getFullBudgetObject.js](./9-getFullBudgetObject.js)

## Linter and Testing
- All files are linted using **ESLint**.
- Testing is done using the **Jest** framework.

---

GitHub repository: [alx-backend-javascript](https://github.com/alx-backend-javascript)

