import { Employee } from './Employee.js';

export class Manager extends Employee {
  constructor(name, salary, id) {
    super(name, salary, id);
    this._bonification = 2;
  }
}