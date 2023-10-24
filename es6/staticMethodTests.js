class Employee {
  constructor(details) {
    this.firstName = details.firstName;
    this.lastName = details.lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  static getNameLength(name) {
    return typeof name === "string" ? name.length : 0;
  }

  printDetails() {
    console.log(this.getFullName());
    console.log("Name length: ", Employee.getNameLength(this.getFullName()));
  }
}

const emp = new Employee({ firstName: "Mohammed", lastName: "Irfan" });

emp.printDetails();
