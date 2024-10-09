// main.ts
/// <reference path="./js/crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './js/crud';

// Create a row with type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert the row and assign the returned RowID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row ID: ${newRowID}`);

// Update the row by adding an age field
const updatedRow: RowElement = {
  ...row,
  age: 23
};
CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated row with ID: ${newRowID}`);

// Delete the row
CRUD.deleteRow(newRowID);
console.log(`Deleted row with ID: ${newRowID}`);
