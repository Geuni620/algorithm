function solution(arr) {
  let answer = [];
  let tmp = 0;

  for (let x of arr) {
    let res = 0;
    while (x) {
      // 32
      tmp = x % 10; // 2
      res = res * 10 + tmp;
      x = parseInt(x / 10); // 3
    }

    count = 0;
    for (let i = 1; i <= res; i++) {
      if (res % i === 0) count++;
    }
    if (count === 2) answer.push(res);
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

/*
#1. 숫자 뒤집기
#2. 1부터 뒤집은 숫자까지 하나씩 다 나눠본 후, 나머지가 0일 경우 count를 +1씩 올려줌
#3. count가 2인 경우면, 1과 자기자신밖에 없으므로, 소수
#4. 소수를 answer에 push 해주고 return
*/
