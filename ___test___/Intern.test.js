
const Intern = require("../lib/Intern");


describe("Enginner", () => {
    describe("Initialization", () => {
        it("should return an object containing the property of employee when called", () => {
            const obj = new Intern();
            expect("school" in obj).toEqual(true);
        });
    });
});