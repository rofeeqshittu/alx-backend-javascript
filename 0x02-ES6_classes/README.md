# 0x02. ES6 Classes

## Overview
This project focuses on understanding and implementing ES6 classes in JavaScript. It covers various aspects of object-oriented programming, including class definitions, methods, inheritance, and getters/setters.

## Concepts
- Classes, Inheritance
- OOP, Static methods
- Metaprogramming and symbols  

!['ES6 classes - For all the things'](ES6-classes.jpeg)
---
## Tasks

| Task Number | Filenames               | Description                                                                                   |
|-------------|-------------------------|-----------------------------------------------------------------------------------------------|
| 0           | [0-classroom.js](0-classroom.js)         | Implement a class named ClassRoom that accepts a maxStudentsSize attribute.                   |
| 1           | [1-make_classrooms.js](1-make_classrooms.js) | Implement a function that returns an array of 3 ClassRoom objects with specific sizes.        |
| 2           | [2-hbtn_course.js](2-hbtn_course.js)       | Implement a class named HolbertonCourse with getters and setters for its attributes.         |
| 3           | [3-currency.js](3-currency.js)             | Implement a class named Currency with methods to get and display currency information.       |
| 4           | [4-pricing.js](4-pricing.js)               | Implement a class named Pricing with methods to display pricing and convert currency.        |
| 5           | [5-building.js](5-building.js)             | Implement an abstract class named Building with a mandatory evacuationWarningMessage method.  |
| 6           | [6-sky_high.js](6-sky_high.js)             | Implement a class named SkyHighBuilding that extends Building and overrides the warning method. |
| 7           | [7-airport.js](7-airport.js)               | Implement a class named Airport that includes a default string description of the airport.   |
| 8           | [8-hbtn_class.js](8-hbtn_class.js)         | Implement a class named HolbertonClass that can be cast to a Number and String.             |
| 9           | [9-hoisting.js](9-hoisting.js)              | Fix code for creating and managing instances of HolbertonClass and StudentHolberton.        |
| 10          | [10-car.js](10-car.js)                      | Implement a class named Car with a method to clone the car object.                          |
| 11          | [100-evcar.js](100-evcar.js)                | Implement a class named EVCar that extends Car and modifies the cloneCar behavior.          |

---

## Setup Environment
All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.

### Installation Instruction
 **Install NodeJS 12.11.x**
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y

