const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor (name, id, email, number) {
        super(name, id, email)
        this.officeNumber = number
        this.role = "Manager"
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}
module.exports = Manager