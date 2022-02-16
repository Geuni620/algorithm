const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(`\n`)
  .map((item) => +item);

solution(input);
function solution(A) {
  let sum = `*`;
  for (i = 1; i <= A; i++) {
    console.log(sum.repeat(i));
  }
}
