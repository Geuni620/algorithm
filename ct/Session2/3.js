function solution(a, b) {
  let answer = "";
  let RPS = {1: "가위", 2: "바위", 3: "보"};
  let A = [];
  let B = [];

  for (let i = 0; i < a.length; i++) {
    if (
      (a[i] === 1 && b[i] === 3) ||
      (a[i] === 2 && b[i] === 1) ||
      (a[i] === 3 && b[i] === 2)
    ) {
      answer += "A ";
    } else if (a[i] === b[i]) {
      answer += "D ";
    } else {
      answer += "B ";
    }
  }

  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));

/*
#1. a가 이기는 경우를 계산해보기
#2. 비기는 경우 계산해보기
#3. 나머지는 다 B로 리턴

## 경우의 수는 하나의 기준을 잡기
*/
