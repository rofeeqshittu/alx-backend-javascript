export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer); // Create a Dataview to interact with the buffer

  // Check if the position is valid
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  view.setInt8(position, value); // Set the Int8 value at the specified position
  return view; // Return the DataView object
}
