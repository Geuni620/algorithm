const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(` `)
  .map((item) => +item);

solution(input);

function solution(A) {
  const gap = 543;
  console.log(A - gap);
}
