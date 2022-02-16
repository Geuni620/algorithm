const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(`\n`);

let T = input[0]; //5

// repeat를 이용한 방법
solution(input);
function solution(input) {
  let A = ``;
  let B = ``;
  let result = ``;
  for (i = 1; i <= T; i++) {
    A = input[i].split(` `).map((item) => +item)[0];
    B = input[i].split(` `).map((item) => +item)[1];
    result = A + B;
    console.log(result);
  }
}
