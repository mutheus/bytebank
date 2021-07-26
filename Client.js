export class Client {
  constructor(name, id, password) {
    this.name = name;
    this._id = id;
    this._password = password;
  }
  
  get id() {
    return this._id;
  }
}
