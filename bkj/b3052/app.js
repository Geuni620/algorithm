const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(`\n`);

let A = [];
A = input.map((item) => +item);
B = 42;
solution(A, B);

function solution(A, B) {
  let div = [];
  for (let i = 0; i < A.length; i++) {
    div.push(A[i] % 42);
  }

  let ans = [];
  for (let j = 0; j < div.length; j++) {
    if (ans.indexOf(div[j]) === -1) {
      ans.push(div[j]);
    }
  }
  console.log(ans.length);
}
