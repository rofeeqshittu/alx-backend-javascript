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
