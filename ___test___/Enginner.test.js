const Engineer = require("../lib/Engineer");

describe("Enginner", () => {
  describe("Initialization", () => {
    it("should check if github is in Engineer object", () => {
      const obj = new Engineer();
      expect("github" in obj).toEqual(true);
    });
    it("should check to see if role is in object", () => {
      const obj = new Engineer();
      expect("role" in obj).toEqual(false);
    });
  });
});
