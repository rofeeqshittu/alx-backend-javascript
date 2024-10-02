export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees); // Get all employees from the report
  const flattenedEmployees = employees.flat(); // Flatten the array of employees
  return flattenedEmployees[Symbol.iterator](); // Return an iterator for the flattened array
}
