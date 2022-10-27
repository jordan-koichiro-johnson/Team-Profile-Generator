// TODO: Write code to define and export the Employee class
class Employee {
    constructor(nameInput, idInput, emailInput) {
        this.name = nameInput
        this.id = idInput
        this.email = emailInput
        this.role = "Employee"
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return this.role
    }
}

module.exports = Employee