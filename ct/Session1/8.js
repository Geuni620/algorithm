function solution(arr) {
  let answer = [];
  let sum = 100;
  let count = 0;

  arr = arr.sort((a, b) => a - b);

  for (let x of arr) {
    count++;
    sum -= x;

    if (count <= 7) {
      answer.push(x);

      if (count === 7) {
        return answer;
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

/*
#1. sork를 써서 작은 수로 정렬
#2. 작은수 부터 더하기
#3. 더한 횟수만큼 count ++
#4. count 7이 되면 return
*/
