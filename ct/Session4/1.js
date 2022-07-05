function solution(n, arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let answer = 0;
  let one = 0;
  let ten = 0;
  let hun = 0;

  for (let i = 0; i < n; i++) {
    // let str = String(arr[i]);
    // if (str.length < 2) {
    //   total = +str[0];
    // }
    // if (str.length < 3) {
    //   one = +str[1];
    //   ten = +str[0];
    //   total = one + ten;
    // } else {
    //   one = +str[0];
    //   ten = +str[1];
    //   hun = +str[2];
    //   total = one + ten + hun;
    // }

    let total = 0;
    let tmp = +arr[i];

    while (tmp) {
      total += tmp % 10;
      tmp = parseInt(tmp / 10);
    }

    if (max <= total) {
      max = total;

      if ((max = total)) {
        answer < arr[i] ? (answer = arr[i]) : (answer = answer);
      }
    }
  }

  return answer;
}

let arr = [119, 460, 632, 40, 551, 137, 123];
console.log(solution(7, arr));

/*
#1. 자릿수의 합부터 구해보기, 세자릿수이므로 일의자리, 십의자리, 백의자리 각각 분해
#2. String로 변경하고 index로 각각의 자릿수를 뽑아냄
#3. 자릿수가 두자리일 수도 있고, 한 자리 일수도 있음. -> 고려해서 분기처리할 것
#4. 자릿수를 각각 Number 변경하고 더해주기
#5. max 값을 지정해주고 total이 max보다 클 경우 max 값을 total로 변경하고, 해당 arr[i]값을 answer로 담아주기
#6. max값과 total 값이 같을 경우, answer에 담겨있는 값이 arr[i]보다 작을 경우 arr[i]를 answer로 변경, 그렇지 않을 시 answer return

---

#7. 답 보고 나서 while 문으로 리펙토링 해보기
#8. reducer로 적용해볼 수도 있음.
*/
