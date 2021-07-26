export class Employee {
  constructor(name, salary, id) {
    this._name = name;
    this._salary = salary;
    this._id = id;
    this._bonification = 1;
    this._password;
  }
  
  newPassword(password) {
    this._password = password;
  }
}