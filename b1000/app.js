//input을 출력할 때와 input[0]을 출력할 때는 다르다.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(` `).map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
  console.log(A + B);
}
