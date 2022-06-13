function solution(a, b, c) {
  let answer;
  let arr = [a, b, c];

  for (let i = 0; i < arr.length; i++) {
    if (arr[0] > arr[i]) {
      arr[0] = arr[i];
    }
  }

  return (answer = arr[0]);
}
console.log(solution(6, 5, 11));

/*
#1. for문으로 첫 번째 값을 받아주기
#2. 다음 값과 첫 번째값 비교 -> 더 작은 값으로 첫 번째 값을 갈아끼우기
#3. 반복 돌려서 마지막에 return
*/
