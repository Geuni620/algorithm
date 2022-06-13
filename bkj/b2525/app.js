const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(`\n`);

let T = +input[1];

let current = input[0].split(` `).map((item) => +item);
let H = current[0];
let M = current[1];

solution(H, M, T);
function solution(H, M, T) {
  // M += T;
  let TH = Math.floor(T / 60);
  let TM = T % 60;

  H += TH;
  M += TM;

  if (M >= 60) {
    H += 1;
    M -= 60;
  }
  if (H >= 24) {
    H -= 24;
  }

  console.log(H, M);
}
