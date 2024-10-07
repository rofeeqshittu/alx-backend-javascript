export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // When cast to a number, return the size
  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
