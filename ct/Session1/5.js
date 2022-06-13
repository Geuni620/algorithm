function solution(arr) {
  let answer;
  let num = arr[0];

  /* for문
  for (let i = 0; i < arr.length; i++) {
    if (num < arr[i]) continue;
    else {
      num = arr[i];
    }
  }


  answer = num;
  */

  // 메서드
  answer = Math.min(...arr);

  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11, 25, 2, 100, 2, 3, 4, 0, 0];
console.log(solution(arr));

/*
#1. for문으로 첫 번째 값을 저장함
#2. 다음 값을 받는데, 그 값은 첫 번째 값과 비교해서 더 작을 경우 첫 번째 값을 arr[두 번째]로 수정해줌
#3. 반복해주기
*/
