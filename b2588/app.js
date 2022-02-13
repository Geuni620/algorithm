const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(`\n`);

input = input.map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
  //내가 푼 방법
  /*
  console.log(A * (B % 10));
  console.log(A * Math.floor((B % 100) / 10));
  console.log(A * Math.floor(B / 100));
  console.log(A * B);
  */

  //라매개발자님이 푼 방법
  const stringB = String(B);
  const one = +stringB[0];
  const ten = +stringB[1];
  const hun = +stringB[2];

  console.log(A * one);
  console.log(A * ten);
  console.log(A * hun);
  console.log(A * B);
}
