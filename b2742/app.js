const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(` `)
  .map((item) => +item);

solution(input);
function solution(input) {
  result = [];
  for (let i = input; i > 0; i--) {
    result += i + `\n`;
  }
  console.log(result);
}
