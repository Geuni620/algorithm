/* 
23일 코드에서
    ans++;
    console.log(ans);
    if (origin === makeNum) {
      break;
    }

    이렇게 console과 ++ans의 위치만 변경해도 답이 맞게 됨.
    사소한 부분이라도 신경써야 답을 맞출 수 있음. 한끗차이로 틀림 
    ans++;
    if (origin === makeNum) {
      break;
    }
  }
  console.log(ans);
}


*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(` `);

//220223
solution(input);
function solution(N) {
  let i = 0;
  let one;
  let ten;
  let ans = 0;
  const origin = Number(N);
  let makeNum = -1;

  while (origin !== makeNum) {
    one = N % 10;
    ten = Math.floor(N / 10);

    newNum = one + ten;
    newNum = newNum % 10;

    makeNum = one + `` + newNum;
    makeNum = Number(makeNum);
    N = makeNum;
    ans++;
    console.log(ans);
    if (origin === makeNum) {
      break;
    }
  }
}
