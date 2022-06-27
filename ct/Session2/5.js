function solution(arr) {
  let answer;
  let count = 1;
  let rank = [];

  for (let i = 0; i < arr.length; i++) {
    count = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) count++;
    }
    rank.push(count);
  }
  console.log(rank);

  return answer;
}

// let arr = [87, 89, 92, 100, 76];
// let arr = [92, 92, 92, 100, 76];
let arr = [92, 92, 89, 92, 76];
console.log(solution(arr));

/*
#1. 이중 for문 돌리기
#2. i를 기준으로 j를 하나씩 for문 돌리면서 i보다 큰 값이 있으면 count++
#3. j for문이 한번 다 돌때마다 배열 rank에 담아주기
#4. j for문이 다시 시작될 때 count = 1로 리셋
*/
