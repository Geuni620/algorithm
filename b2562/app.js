const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(`\n`)
  .map((item) => +item);

solution(input);
function solution(input) {
  let max = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > max) {
      max = input[i];
    }
  }
  console.log(max);
  console.log(input.indexOf(max) + 1);
}
