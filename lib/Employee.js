class Employee {

  constructor() {
    this._role = "Employee";
  }

  constructor(name) {
    this._role = "Employee";
    this._name = name
  }

  constructor(name, id) {
    this._role = "Employee"; 
    this._name = name;
    this._id = id;
  }

  constructor(name, id, email) {
    this._role = "Employee";
    this._name = name;
    this._id = id;
    this._email = email;
  }

  getName() {
    return this._name;
  }

  getId() {
    return this._id;
  }

  getEmail() {
    return this._email;
  }

  getRole(){
    return this._role;
  }

}

module.exports = Employee;

