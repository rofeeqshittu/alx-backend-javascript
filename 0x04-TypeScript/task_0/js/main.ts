interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Homo"
  secondName: "Sapien"
  age: 25;
  location: "Earth"
};

const student2: Student = {
  firstName: "Jone"
  secondName: "Smith"
  age: 27;
  location: "San Francisco"
};

const studentsList: Student[] = [student1, student2];

// Create a table element
const table = document.createElement('table');

// Loop through the studentsList and add a row for each student
studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  // Set text to their respective key
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  // Append the cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row); // Append the row to the table
});

// Append the table to the body
body.appendChild(table);
