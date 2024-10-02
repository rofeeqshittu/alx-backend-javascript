export default function appendToEachArrayValue(array, appendString) {
  let idx = 0; // Track the index manually
  for (const value of array) {
    array[idx] = appendString + value;
    idx++;
  }

  return array;
}
