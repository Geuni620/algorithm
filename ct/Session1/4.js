function solution(n) {
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(6));

/*
설명할게 따로 없음. 그냥 for문돌리면 해결 가능
*/
