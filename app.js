/*
boj.kr/2753번
윤년이면 1, 아니면 0을 출력하는 프로그램
윤년은 연도가 4의 배수 이면서(&&) 100의 배수가 아닐 때 또는 400의 배수 일때

ex) 2012년은 4의 배수 / 100의 배수는 아니라서 윤년
1900년은 4의 배수 이면서(&&) 100의 배수이고, 400의 배수는 아님 -> 윤년이 아님
2000년은 4의 배수 이면서 100의 배수이고, 400의 배수 -> 윤년?
*/

const fs = require(`fs`);
let input = fs.readFileSync(`/dev/stdin`).toString().split(" ");
const Num = +input;

if ((Num % 4 == 0 && Num % 100 != 0) || Num % 400 == 0) {
  console.log(1);
} else {
  console.log(0);
}
