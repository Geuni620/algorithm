const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(` `)
  .map((item) => +item);

solution();
function solution() {
  //맞췄지만 더 나은 방법으로 풀어보기 +=
}
