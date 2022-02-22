/* 
  알게된 점 
  * multi.split("")를 해주면 특정문자 또는 공백을 지정하지 않더라도 split 가능했음.
  * filter와 length를 통해서 개수를 셀 수 있음
  * for만 이용해서 구현해보기
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(`\n`);

solution(+input[0], +input[1], +input[2]);

function solution(A, B, C) {
  let answer = ``;
  let multi = (A * B * C).toString();
  let arr = multi.split("");
  for (let i = 0; i < 10; i++) {
    answer += arr.filter((item) => item === `${i}`).length + `\n`;
  }
  console.log(answer);
}
