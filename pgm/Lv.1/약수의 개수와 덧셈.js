function solution(left, right) {
  var answer = 0;
  let count = 0;

  for (let i = left; i <= right; i++) {
    count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }

    if (count % 2 === 0) answer += i;
    else if (count % 2 !== 0) answer -= i;
  }
  return answer;
}

console.log(solution(13, 17));

/*
#1. for문으로 13 - 17까지 받아보기
#2. for문을 한번 더 써서 13을 1부터 쭉 나눴을 때 몫이 0이 되면 count ++
#3. count가 짝수 일 경우 answer += i
#4. count가 홀수 일 경우 answer -= i
*/
