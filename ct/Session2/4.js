function solution(arr) {
  let answer = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) count = 0;
    if (arr[i] === 1) count++;

    answer += count;
  }

  console.log(count);
  return answer;
}

let arr = [1, 1, 1, 1, 1, 0, 1, 1, 0];
console.log(solution(arr));

/*
#1. count를 하나 만들어줌
#2. 1이면 count++, 0이면 count=0으로 계산해보기
#3. answer에 count 누적
*/
