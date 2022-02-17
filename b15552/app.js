const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(`\n`);

solution(input);

function solution(input) {
  let T = +input[0];
  let array = [];
  let result = ``;
  for (let i = 1; i <= T; i++) {
    array = input[i].split(` `).map((item) => +item);
    result += Number(array[0]) + Number(array[1]);
    if (i === T) break;
    result += `\n`;
  }
  console.log(result);
}
