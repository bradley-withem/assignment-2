const fs = require("fs");

// count total number of words
function countWords(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const words = text.trim().split(/\s+/);
  return words.length;
}

// find the longest word
function findLongestWord(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const words = text.trim().split(/\s+/);

  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// count how many lines the file has
function countLines(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const lines = text.split("\n");
  return lines.length;
}

// manual testing
console.log("Quotes.txt word count:", countWords("data/quotes.txt"));
console.log("Quotes.txt longest word:", findLongestWord("data/quotes.txt"));
console.log("Quotes.txt line count:", countLines("data/quotes.txt"));

// export functions for testing
module.exports = {
  countWords,
  findLongestWord,
  countLines,
};

