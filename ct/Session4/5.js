function solution(n, k, card) {
  let answer = [];
  let tmp = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  let ans = Array.from(tmp).sort((a, b) => b - a);
  console.log(Array.from(tmp), tmp);
  answer = ans[k - 1];

  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

/* 완전탐색
#1. 3번 뽑아야하므로, for문 3번 돌리기
#2. new Set()을 새롭게 알게 됨
  -> 중복되지 않은 유일한 값들의 집합
#3. add() 메서드로 card 안에서 뽑았던 값 3개를 넣어줌
#4. Array.from()으로 set을 배열로 만들어줌
#5. 내림차순으로 정렬하고 k-1 번째 값을 추출
*/
