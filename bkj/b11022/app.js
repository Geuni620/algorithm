const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(`\n`);

let T = input[0];

solution(T, input);
function solution(T, input) {
  result = ``;
  for (let i = 1; i <= T; i++) {
    let array = input[i].split(` `).map((item) => +item);

    console.log(
      `Case #${i}: ${array[0]} + ${array[1]} = ${array[0] + array[1]}`
    );
  }
}
