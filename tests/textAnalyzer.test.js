const {
  countWords,
  findLongestWord,
  countLines,
} = require("../src/textAnalyzer");

describe("Text Analyzer", () => {
  test("counts total words", () => {
    expect(countWords("data/sample-text.txt")).toBe(8);
  });

  test("finds the longest word", () => {
    expect(findLongestWord("data/sample-text.txt")).toBe("JavaScript");
  });

  test("counts total lines", () => {
    expect(countLines("data/sample-text.txt")).toBe(2);
  });
});
