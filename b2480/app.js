/*
- sort()라는 method를 알게 됐음.
    - 정렬인데, 오름차순으로 정렬해줌.
    - 하지만 중간에 10과 같은 두자릿수가 들어갈 경우 앞자리만 인식하기 때문에 또 다른 프로세스를 찾아야했음.
    - 이번엔 주사위숫자이기 때문에 최대 숫자는 6임.
- sort()를 통해 정렬을 하고 난 뒤 편하게 진행할 수 있었음
    - 첫 번째 조건의 경우 `&&` 를 활용해 A를 선택하면 조건 완성
    - 두 번째 조건의 경우 `||` 를 활용해 B를 선택하면 조건 완성(sort()때문에 정렬된 값이 가운데는 무조건 2개가 선택된 값일 것이므로)
    - 세 번째 조건의 경우 `&&` 를 활용해 첫 번째 조건에 `!== 를` 활용해 풀었음
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(` `)
  .map((item) => +item)
  .sort();

solution(input[0], input[1], input[2]); // 335
function solution(A, B, C) {
  let result = 0;
  if (A == B && B === C) {
    result = 10000 + A * 1000;
  } else if (A === B || B === C) {
    result = 1000 + B * 100;
  } else if (A !== B && B !== C) {
    result = C * 100;
  }
  console.log(result);
}
