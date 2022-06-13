// 테스트 케이스 마지막부분에 \n이 하나 더 추가되어 있는 듯
// 이러한 문제는 trim().split(`\n`) 해주면 됨
// 굳이 length-1을 안해주어도 됨.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(`\n`);

solution(input);
function solution(input) {
  let i = 0;
  let answer = ``;
  while (i < input.length) {
    let num = input[i].split(` `).map((item) => +item);

    a = num[0];
    b = num[1];
    console.log(a + b);
    i++;
  }
}
