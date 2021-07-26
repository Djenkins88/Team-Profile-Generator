const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing the property of employee when called", () => {
            const obj = new Employee();
            expect("name" in obj).toEqual(true);
        });
        it("should set employee id when created", () => {
            const employee = new Employee("Sarah");
            expect(employee.name).toEqual("Sarah");
        });
        
        it("should return the supplied email", () => {
            const email = "john@hotmail.com";
            const employee = new Employee("john", 1, email);
            expect(employee.email).toEqual(email);
        });
        it("should return Employee", () => {
            const role = "Employee";
            const employee = new Employee("john", 1, "john@hotmail.com");
            expect(employee.getRole()).toEqual("role");
        });
    });
});

