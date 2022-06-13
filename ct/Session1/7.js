function solution(day, arr) {
  let answer = [];
  let one = 0;
  for (let i = 0; i < arr.length; i++) {
    one = arr[i] % 10;

    if (one === day) {
      answer.push(one);
    }
  }

  return answer.length;
}

// arr = [25, 23, 11, 47, 53, 17, 33];
arr = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr));

/*
#1. 1의 자릿수만 뽑아내기
#2. 1의 자릿수와 day가 같은 경우 추출
#3. count 세기
*/
