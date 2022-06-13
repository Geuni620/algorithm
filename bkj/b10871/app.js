/*
10 5  // A , X
1 10 4 9 2 3 8 5 7 6 //N
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(`\n`);

let A = +input[0].split(` `)[0];
let X = +input[0].split(` `)[1];
let N = input[1].split(` `).map((item) => +item);

solution(A, X, N);
function solution(A, X, N) {
  let result = ``;
  for (let i = 0; i <= A; i++) {
    if (N[i] < X) {
      result += N[i] + ` `;
    }
  }
  console.log(result);
}
