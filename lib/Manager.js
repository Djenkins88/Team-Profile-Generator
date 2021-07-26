const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, id, email, officeNumber)
    {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getofficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getRoleHtml() {
        return `<li>Office Number: ${this.getofficeNumber()}</li>`
    }
}

module.exports = Manager;

