interface Teacher {
  readonly firstName: string; // Readonly: can only be set at initialization
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  [propName: string]: any; // Allow any additional properties (like 'contract')
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFxn {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFxn = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`; // firstName starting letter . lastName
}


// Interface for the constructor for  StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the methods of the StudentClass
interface StudentClassInterface {
  workOnHome(): string;
  displayName(): string;
}

// Implementing the StudentClass
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  // Method that returns a string indicating work is in progress
  workOnHome(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
