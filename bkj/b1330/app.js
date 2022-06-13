const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(` `)
  .map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
  if (A > B) {
    console.log(">");
  } else if (A < B) {
    console.log("<");
  } else {
    console.log("==");
  }
}
