const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(`\n`);

let caseNum = input[0];
arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(input[i].split(``));
}

solution(caseNum, arr);

function solution(caseNum, arr) {
  let count = 0;
  let ans = 0;
  for (let i = 0; i < caseNum; i++) {
    ans = 0;
    count = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === `O`) {
        count++;
      } else {
        count = 0;
      }
      ans += count;
      // console.log(`ans 값은 ${i}, ${j}, ${ans}`);
    }

    // break;
    console.log(ans);
  }
}
