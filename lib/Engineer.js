const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, id, email, user) {
        super(name, id, email)
        this.role = "Engineer"
        this.github = user
    }
    getGithub() {
        return this.github
    }
}



module.exports = Engineer