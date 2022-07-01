function solution(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, "");

  if (s.split("").reverse().join("") !== s) return "NO";

  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));

/*
1. 모두 대문자로 변경시켜주기
2. replace를 이용해서 a-z가 아닐 경우 제거
3. reverse한 s와 기존 s를 비교
*/
