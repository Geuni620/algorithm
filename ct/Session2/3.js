function solution(a, b) {
  let answer = "";
  let n = a.length;

  for (let i = 0; i < n; i++) {
    if (a[i] === b[i]) {
      answer += "D ";
    } else if (
      (a[i] === 1 && b[i] === 3) ||
      (a[i] === 2 && b[i] === 1) ||
      (a[i] === 3 && b[i] === 2)
    ) {
      answer += "A ";
    } else {
      answer += "B ";
    }
  }

  return answer;
}

let a = [2, 3, 3, 3, 3];
let b = [1, 1, 2, 3, 3];
console.log(solution(a, b));

/* 
#1. 1: 가위 2: 바위 3: 보
#2. a[i]와 b[i]가 같은 경우 D 
#3. A를 기준으로 이기는경우 출력, 나머지는 else로 B가 이김
*/
