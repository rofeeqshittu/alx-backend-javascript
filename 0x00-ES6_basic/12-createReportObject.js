export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList }, // Spread the employeesList into allEmployees
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length; // return the count
    }
  };
}
