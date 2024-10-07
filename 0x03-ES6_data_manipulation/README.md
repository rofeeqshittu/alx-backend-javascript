# 0x03. ES6 Data Manipulation

## Overview
This project covers various JavaScript ES6 features, focusing on data manipulation techniques using arrays, typed arrays, sets, maps, and weak maps. By the end of this project, you should be able to explain how to effectively use map, filter, and reduce on arrays, understand typed arrays, and utilize set and map data structures.  
!["Array Everywhere"](array_everywhere.jpg)

## Concepts
- Array manipulation
- Typed arrays
- Set data structure
- Map data structure
- WeakMap

## Tasks

| Task Number | Filenames                          | Description                                                  |
|-------------|------------------------------------|--------------------------------------------------------------|
| 0           | [0-get_list_students.js](0-get_list_students.js) | Creates a function that returns an array of student objects. |
| 1           | [1-get_list_student_ids.js](1-get_list_student_ids.js) | Returns an array of student IDs from a list of objects.     |
| 2           | [2-get_students_by_loc.js](2-get_students_by_loc.js) | Filters students by location and returns matching objects.   |
| 3           | [3-get_ids_sum.js](3-get_ids_sum.js) | Returns the sum of all student IDs.                          |
| 4           | [4-update_grade_by_city.js](4-update_grade_by_city.js) | Updates student grades based on city and new grades.        |
| 5           | [5-typed_arrays.js](5-typed_arrays.js) | Creates an Int8 typed array and sets a value at a specified position. |
| 6           | [6-set.js](6-set.js)             | Returns a Set from an array of elements.                    |
| 7           | [7-has_array_values.js](7-has_array_values.js) | Checks if all elements in an array exist within a set.      |
| 8           | [8-clean_set.js](8-clean_set.js) | Returns a string of set values starting with a specific string. |
| 9           | [9-groceries_list.js](9-groceries_list.js) | Returns a map of groceries with names and quantities.        |
| 10          | [10-update_uniq_items.js](10-update_uniq_items.js) | Updates quantities of items in a map where quantity is 1.   |
| 11          | [100-weak.js](100-weak.js)       | Implements a WeakMap and tracks the number of API calls made to an endpoint. |

## Setup
To set up the project environment, follow these steps:

1. Install NodeJS 12.11.x:
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
    ```

2. Install Jest, Babel, and ESLint: In your project directory, use the supplied package.json to install necessary packages:
    ```bash
    npm install
    ```

---

