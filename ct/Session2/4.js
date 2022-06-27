function solution(arr) {
  let answer = 0;
  let count = 0;
  for (let x of arr) {
    if (x === 1) count++;
    if (x === 0) count = 0;

    answer += count;
  }

  return answer;
}

// let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
// 1 + 1 + 2 + 3 + 1 + 2 = 10

let arr = [1, 1, 1, 1, 1, 0, 0, 1, 1, 0];
// 1 + 2 + 3 + 4 + 5 + 1 + 2 = 18
console.log(solution(arr));

/*
#1. 1이 나올경우 count++ 해주기
#2. 0이 나올경우 count = 0으로 리셋해주기
#3. for문 한바퀴 돌때마다 answer에 누적 더해주기
*/
