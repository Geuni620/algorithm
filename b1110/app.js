const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(` `);

//220224
solution(input);
function solution(N) {
  let origin = Number(N);
  let one;
  let ten;
  let makeNum;
  let ans = 1;
  while (true) {
    if (N >= 10) {
      one = N % 10; //5
      ten = Math.floor(N / 10); //5
      makeNum = one + ten; // 10
      newNum = Number(String(one) + String(makeNum % 10));

      N = newNum;
    } else {
      one = N % 10;
      ten = 0;
      makeNum = one + ten;
      newNum = Number(String(one) + String(makeNum % 10));
      N = newNum;
    }

    if (origin === N) {
      break;
    }

    ans++;
  }
  console.log(ans);
}
