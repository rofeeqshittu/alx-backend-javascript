export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be string');
    }

    this._name = name;
    this._code = code;
  }

  // Override the default toString method
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
