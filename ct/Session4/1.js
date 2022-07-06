function solution(n, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = 0;
    let num = 0;

    // while문 사용
    // while (tmp) {
    //   sum += tmp % 10;
    //   tmp = Math.floor(tmp / 10);
    // }

    // 내장 메서드 사용
    sum = x
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);

    if (max <= sum) {
      max = sum;

      if (answer < x) answer = x;
    }
  }

  return answer;
}

let arr = [119, 460, 637, 40, 551, 137, 123, 635];
console.log(solution(7, arr));

/*
#1. 자릿수의 합부터 구해보기, 세자릿수이므로 일의자리, 십의자리, 백의자리 각각 분해
#2. String로 변경하고 index로 각각의 자릿수를 뽑아냄
#3. 자릿수가 두자리일 수도 있고, 한 자리 일수도 있음. -> 고려해서 분기처리할 것
#4. 자릿수를 각각 Number 변경하고 더해주기
#5. max 값을 지정해주고 total이 max보다 클 경우 max 값을 total로 변경하고, 해당 arr[i]값을 answer로 담아주기
#6. max값과 total 값이 같을 경우, answer에 담겨있는 값이 arr[i]보다 작을 경우 arr[i]를 answer로 변경, 그렇지 않을 시 answer return

---

#1. 간소화 시켜보기
#2. while문 적용
#3. 내장메서드 사용해보기
*/
