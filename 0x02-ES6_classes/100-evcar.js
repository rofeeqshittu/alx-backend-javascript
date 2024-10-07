import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Overide Symbol.species to return Car instead of EvCar when cloning
  static get [Symbol.species]() {
    return Car; // When cloning, it should return a Car object
  }

  // Clone method using species
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species(undefined, undefined, undefined); // Return new instance of car
  }
}
