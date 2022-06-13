/*
1 1
2 3
3 4
9 8
5 2
0 0
*/

const fs = require("fs");
const { isRegExp } = require("util/types");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(`\n`);

let array = [];
for (let i = 0; i < input.length; i++) {
  array[i] = input[i].split(` `).map((item) => +item);
}

solution(array);
function solution(input) {
  let i = 0;
  let result = ``;
  // console.log(array);
  while (i < input.length) {
    result = array[i][0] + array[i][1];
    i++;
    if (result === 0) {
      break;
    }
    console.log(result);
  }
}
