//boj.kr/ 10871번
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [inputN, inputX] = input[0].split(` `).map((item) => +item);
const arrayA = input[1].split(` `).map((item) => +item);

solution(inputN, inputX, arrayA);

function solution(N, X, A) {
  let answerArray = [];
  for (let i = 0; i < N; ++i) {
    if (A[i] < X) {
      answerArray.push(A[i]);
    }
  }

  console.log(answerArray.join(` `));
}
