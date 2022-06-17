function solution(s, t) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (str[i] === t) {
      answer++;
    }
  }
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "G"));

/*
#1. str을 for문 돌려서 하나씩 확인해보는 방법응로 접근
#2. str[i]가 두번째 인자와 일치하면 answer +1씩 올리기
#3. return으로 answer
*/
