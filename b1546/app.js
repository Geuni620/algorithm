const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(`\n`);

let num = +input[0];
let numCase = input[1].split(` `).map((item) => +item);

solution(num, numCase);
function solution(num, numCase) {
  let max = Math.max(...numCase);
  let maxAver = [];
  let newAver = 0;
  let ans = 0;

  for (let i = 0; i < num; i++) {
    maxAver.push((numCase[i] / max) * 100);
  }
  for (let j = 0; j < num; j++) {
    newAver += maxAver[j];
    ans = newAver / num;
  }
  console.log(ans);
}
