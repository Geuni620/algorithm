const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(` `);
input = input.map((item) => +item);

solution(input);

function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  console.log(result);
}
