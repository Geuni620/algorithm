function solution(arr) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  let count = 0;
  let lineLeft = 0;
  let lineRight = 0;

  for (let i = 0; i < arr.length; i++) {
    count = 0;

    for (let j = 0; j < arr.length; j++) {
      count += arr[i][j];
      if (count > max) max = count;
    }

    for (let j = arr.length - 1; j >= 0; j--) {
      if (i === j) lineLeft += arr[i][j]; // 왼쪽으로 대각선
      if (i + j === arr.length - 1) lineRight += arr[i][j]; // 오른쪽 대각선
    }
  }
  console.log(lineLeft, lineRight, max);

  answer = Math.max(max, lineLeft, lineRight);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));

/*
#1. 일단 대각선은 고려하지말기
#2. max 값을 하나 정하기
#3. 이중 for문 돌려서 25개가 나와야함 -> ok
#4. 가로축 다 더한 값 max와 세로줄 다 더한값 max 비교하고, -> 대각선 왼쪽 오른쪽 비교해서 가장 큰 값 도출

-> 현재 가장 큰 값 154

#5. 대각선 왼쪽 / 오른쪽 
-> 대각선 왼쪽 특징이 i = j 임 
-> 대각선 오른쪽 특징이 i + j = arr.length-1
*/
