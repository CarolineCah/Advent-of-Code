const input = require("fs").readFileSync("input", "utf-8").split("\n");

const trees = ([x, y = 1]) => 
  input.filter((e, i) => (input[i * y] || "")[(i * x) % e.length] === "#").length;

console.log('Part one:', trees([3]));

console.log('Part two:', [[1], [3], [5], [7], [1, 2]].map(trees).reduce((a, b) => a * b, 1));