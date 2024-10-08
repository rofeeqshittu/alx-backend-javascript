export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)

    .map((student) => {
      const studentGrade = newGrades.find((gradeObj) => gradeObj.studentId === student.id);
      // Return a new student object with the grade of 'N/A'
      return {
        ...student,
        grade: studentGrade ? studentGrade.grade : 'N/A',
      };
    });
}
