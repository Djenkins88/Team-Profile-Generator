const Manager = require("../lib/Manager");

describe("Enginner", () => {
  describe("Initialization", () => {
    it("should return an object containing the property of employee when called", () => {
      const obj = new Manager();
      expect("officeNumber" in obj).toEqual(true);
    });
  });
});
