function solution(s, t) {
  let max = 2;
  let count = 0;
  let ans1 = [];
  let ans2 = [];
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) count = 0;
    if (s[i] !== t) count++;
    // if (count > 2) count = max;

    ans1.push(count);
  }

  count = 0;

  for (let j = s.length - 1; j >= 0; j--) {
    if (s[j] === t) count = 0;
    if (s[j] !== t) count++;
    // if (count > 2) count = max;

    ans2.unshift(count);
  }

  for (let k = 0; k < s.length; k++) {
    answer.push(Math.min(ans1[k], ans2[k]));
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
// 1 0 1 2 1 0 1 2 2 1 0

/* 
#1. e가 나오면 reset 되어야함 - > 0
#2. e가 안나오면 count++
#3. for문을 오른쪽으로 한번, 왼쪽으로 한번씩 돌리기
#4. 오른쪽 왼쪽 값의 최솟값만 합쳐서 answer로 return
*/
