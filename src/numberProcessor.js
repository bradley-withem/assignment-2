const fs = require("fs");

// Helper function: read numbers from file
function readNumbers(filePath) {
  const data = fs.readFileSync(filePath, "utf8");
  return data
    .trim()
    .split("\n")
    .map(Number);
}

// 1. Calculate the sum of all numbers
function calculateSum(filePath) {
  const numbers = readNumbers(filePath);
  return numbers.reduce((sum, num) => sum + num, 0);
}

// 2. Find the highest number
function findHighestNumber(filePath) {
  const numbers = readNumbers(filePath);
  return Math.max(...numbers);
}

// 3. Find the lowest number
function findLowestNumber(filePath) {
  const numbers = readNumbers(filePath);
  return Math.min(...numbers);
}

// 4. Calculate the average
function calculateAverage(filePath) {
  const numbers = readNumbers(filePath);
  const sum = calculateSum(filePath);
  return sum / numbers.length;
}

// --- Manual testing ---
console.log("Sum:", calculateSum("data/sample-numbers.txt"));
console.log("Highest:", findHighestNumber("data/sample-numbers.txt"));
console.log("Lowest:", findLowestNumber("data/sample-numbers.txt"));
console.log("Average:", calculateAverage("data/sample-numbers.txt"));

// Export functions
module.exports = {
  calculateSum,
  findHighestNumber,
  findLowestNumber,
  calculateAverage,
};
