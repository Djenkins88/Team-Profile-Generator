const Engineer = require("../lib/Engineer");

describe("Enginner", () => {
  describe("Initialization", () => {
    it("should check if github is in Engineer object", () => {
      const obj = new Engineer();
      expect("github" in obj).toEqual(true);
    });
  });
});
