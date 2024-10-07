export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this.color = color;
  }

  // Method to clone the Car instance, but initialize with undefined values
  cloneCar() {
    return new this.constructor(undefined, undefined, undefined);
  }
}
