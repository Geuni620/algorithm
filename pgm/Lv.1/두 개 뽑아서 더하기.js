function solution(numbers) {
  let answer = [];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = 0;
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) continue; // i, j 같을 경우 skip

      sum = numbers[i] + numbers[j];

      if (answer.indexOf(sum) === -1) answer.push(sum);
    }
  }
  // 정렬
  answer = answer.sort((a, b) => a - b);

  return answer;
}

let arr = [2, 1, 3, 4, 1];
console.log(solution(arr));

/*
#1. 이중for문 만들기
#2. i의 첫 번째 idx를 넣고 j를 한 바퀴 쭉 더해준 뒤 중복된 값은 제거.
#3. 반복하고 중복되지 않은 값만 answer에 담아주기
#4. sork로 오름차순 정렬
*/
