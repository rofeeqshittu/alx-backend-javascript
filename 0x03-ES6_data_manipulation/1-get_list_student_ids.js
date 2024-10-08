export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  const idArrays = array.map((student) => student.id);
  return idArrays;
}
