const { capitalizeWords, filterActiveUsers, logAction } = require("../index");

describe("capitalizeWords", () => {
  it("Normal sentence", () => {
    const sentence = "hello world";
    const result = capitalizeWords(sentence);
    expect(result).toBe("Hello World");
  });

  it("Emtpy String", () => {
    const emtpyString = "";
    const result = capitalizeWords(emtpyString);
    expect(result).toBe("");
  });

  it("String with speical char", () => {
    const speicalString = "hello-world";
    const result = capitalizeWords(speicalString);
    expect(result).toBe("Hello-World");
  });
});

describe("filterActiveUsers", () => {
  it("Mixed users", () => {
    const users = [
      {
        user: "John Doe",
        isActive: true,
      },
      {
        user: "Alvin Kamara",
        isActive: false,
      },
    ];
    const result = filterActiveUsers(users);
    expect(result).toEqual([{ user: "John Doe", isActive: true }]);
  });

  it("Inactive Users", () => {
    const inActiveUsers = [
      {
        name: "Jane Doe",
        isActive: false,
      },
      {
        name: "Kenneth Walker III",
        isActive: false,
      },
    ];
    const result = filterActiveUsers(inActiveUsers);
    expect(result).toEqual([]);
  });

  it("Empty Array", () => {
    const emptyArray = [];
    const result = filterActiveUsers(emptyArray);
    expect(result).toEqual([]);
  });
});

describe("logAction", () => {
  it("Generates correct log string for valid inputs", () => {
    const result = logAction("LOGIN", "Saint Michael");
    expect(result).toContain("LOGIN");
    expect(result).toContain("Saint Michael");
  });

  it("Handles missing action", () => {
    const result = logAction("", "Saint Michael");
    expect(result).toContain("Saint Michael");
  });

  it("Handles missing username", () => {
    const result = logAction("LOGIN", "");
    expect(result).toContain("LOGIN");
  });

  it("Handles empty strings for both inputs", () => {
    const result = logAction("", "");
    expect(typeof result).toBe("string");
  });
});
