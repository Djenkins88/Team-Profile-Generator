const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, id, email, officeNumber)
    {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getofficeNumber() {
        return this.school;
    }
    getPosition() {
        return Manager;
    }

}

module.exports = Manager;

