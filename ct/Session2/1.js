function solution(arr) {
  let answer = [];
  answer.push(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

let arr = [7, 3, 9, 5, 6, 12, 13, 13, 21, 5];
console.log(solution(arr));

/*
#1. 배열의 첫 번째 숫자를 answer 배열에 담아주기
#2. 조건문을 이용해서 arr의 첫 번째 숫자보다 다음 숫자가 클 경우 answer에 담아주기
#3. 조건문을 이용해서 두 번째 숫자보다 다음 숫자가 클 경우 answer에 담아주기
#4. 끝까지 반복
*/
