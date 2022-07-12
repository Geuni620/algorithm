function solution(n, arr) {
  let answer = 0;
  let tmp = 0;
  let sum = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    sum = 0;
    tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = parseInt(tmp / 10);
    }

    if (max <= sum) {
      max = sum;
      answer = x;

      if (max === sum) answer = Math.max(answer, x);
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

/*
#1. answer는 가장 작은 수를 설정
#2. for문으로 인자하나씩 받아주기
#3. 한 자릿수씩 더해주기. -> while문으로 구현
#4. max값보다 sum이 더 클 경우 max를 변경시켜주기
#5. sum과 max 가 같다면 기존 x값이 더 큰 경우를 선택
*/
