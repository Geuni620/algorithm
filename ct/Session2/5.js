function solution(arr) {
  let answer = "";
  let rank;

  for (let i = 0; i < arr.length; i++) {
    rank = 1;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        rank++;
      }
    }
    answer += rank + " ";
  }

  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));

/* 
#1. 이중 for문 돌리기
#2. arr[i]를 기준으로 나보다 큰 값이 있을 경우 rank는 ++시키기
#3. rank를 answer에 담아주기
#4. 1바퀴 돌고나면 rank는 1로 리셋해줘야함
*/
