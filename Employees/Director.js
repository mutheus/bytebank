import { Employee } from './Employee.js';

export class Director extends Employee {
  constructor(name, salary, id) {
    super(name, salary, id);
    this._bonification = 1.1;
  }
}