const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, github)
    {
        super(name, id, email);
        this.github = github;
    }
    getGitHub() {
        return this.github
    }
    getPosition() {
        return "Engineer"
    }
}

module.exports = Engineer;