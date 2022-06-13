const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(`\n`);

//for문으로 구현해보기
let N = +input[0];
let arr = input[1].split(` `).map((item) => +item);
let min = 10;
let max = 10;

solution(N, arr);
function solution(N, arr) {
  for (let i = 0; i < N; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
    return min, max;
  }
  console.log(min, max);
}

//Math.max() Math.min()을 활용.
let N = +input[0];
let arr = input[1].split(` `).map((item) => +item);

solution(N, arr);
function solution(N, arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  console.log(`${min} ${max}`);
}
