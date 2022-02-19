const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(`\n`);

//Math.max() Math.min()을 활용.
let N = +input[0];
let arr = input[1].split(` `).map((item) => +item);

solution(N, arr);
function solution(N, arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  console.log(`${min} ${max}`);
}
