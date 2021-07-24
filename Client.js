export class Client {
  name;
  _id;
  
  get id() {
    return _id;
  }
  
  constructor(name, id) {
    this.name = name;
    this._id = id;
  }
}
