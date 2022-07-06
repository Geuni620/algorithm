function solution(arr) {
  let answer = [];
  let num = [];
  let count = 0;

  for (x of arr) {
    tmp = x;

    // while (tmp) {
    //   num.push(+tmp.toString().split("").reverse().join(""));
    //   break;
    // }

    // 숫자 뒤집기
    let res = 0;
    while (tmp) {
      let t = tmp % 10; // 2, 0
      res = res * 10 + t; // 2, 20
      tmp = parseInt(tmp / 10); // 3 , 0s
    }

    num.push(res);
  }

  for (let i = 0; i < num.length; i++) {
    count = 0;
    for (let j = 1; j <= num[i]; j++) {
      if (num[i] % j === 0) count++;
    }
    if (count === 2) answer.push(num[i]);
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

/*
#1. for문으로 i idx 값을 하나씩 받아보기
#2. while문을 이용해서 숫자를 하나씩 분해시키기 -> 몫과 나머지로 -> 한 자릿수, 두 자릿수, 세 자릿수. -> method로 해결
#3. 분해시킨 숫자를 뒤집어주기
#4. 2 - 9까지 나누었을 때 몫이 0이 되지 않으면 소수 -> 1부터 자기 자신 숫자까지 나누었을 때 몫이 0이 될 경우 count ++ 해줌
#5. count가 2인 경우만 소수 -> answer.push(num[i])
#5. return
*/
