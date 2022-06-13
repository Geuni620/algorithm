/*
5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91
*/

const fs = require("fs");
const { isModuleNamespaceObject } = require("util/types");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(`\n`);

// console.log(input);
const cycle = +input[0];

let arr = [];
for (let i = 1; i <= cycle; i++) {
  arr.push(input[i].split(` `).map((item) => +item));
}

let testCase = [];
let inputTestCaseNum = [];
for (let i = 0; i < cycle; i++) {
  testCase.push(arr[i][0]);

  const testcaseNum = {
    N: testCase[i],
    arr: arr[i],
  };
  inputTestCaseNum.push(testcaseNum);
}

function solution(cycle, inputTestCaseNum) {
  let num = 0;
  let arr = [];
  let sum = 0;
  let average = 0;
  for (let i = 0; i < cycle; i++) {
    num = inputTestCaseNum[i].N;
    arr = inputTestCaseNum[i].arr;

    let nonFirstArr = arr.slice(1);
    //여기서 부터 막힘 ㅠㅠ
    for (let j = 1; j <= num; j++) {
      sum += nonFirstArr[j];
      if (num === nonFirstArr.length) {
        average = sum / num;
      }
    }
  }
}

solution(cycle, inputTestCaseNum);
