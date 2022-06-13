function solution(arr) {
  let answer = [];
  let oddArr = [];
  let sum = 0;

  /* 답보기전 작성
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddArr.push(arr[i]);
      sum += arr[i];
    }

    answer = Math.min(...oddArr);
  }

  return {sum, answer};
  */

  // for of문 써보기

  let min = Number.MAX_SAFE_INTEGER; // 최소값을 무한정 큰 수로 지정해놓기

  for (x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (min > x) min = x;
    }
    answer = min;
  }

  return {sum, answer};
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

/*
#1. 홀수를 걸러내기 %2
#2. 걸러낸 홀수 각각 더해주기, 배열만들어서 홀수만 담아주기
#3. 최솟값 Math.min으로 구하기
#4. 자료구조로 만들어서 return
*/
