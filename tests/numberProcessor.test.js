const {
  calculateSum,
  findHighestNumber,
  findLowestNumber,
  calculateAverage,
} = require("../src/numberProcessor");

describe("Number Processor", () => {
  test("calculates sum of numbers", () => {
    expect(calculateSum("data/sample-numbers.txt")).toBe(55);
  });

  test("finds highest number", () => {
    expect(findHighestNumber("data/sample-numbers.txt")).toBe(10);
  });

  test("finds lowest number", () => {
    expect(findLowestNumber("data/sample-numbers.txt")).toBe(1);
  });

  test("calculates average", () => {
    expect(calculateAverage("data/sample-numbers.txt")).toBe(5.5);
  });
});
