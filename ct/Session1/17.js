function solution(s) {
  let answer = [];
  console.log(s);

  for (let i = 0; i < s.length; i++) {
    console.log(s.indexOf(s[i]));
    if (s.indexOf(s[i]) === i) answer.push(s[i]);
  }

  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));

/*
#1. for문으로 s의 배열을 하나씩 받아보기
#2. indexOf 적용되는지 확인해보기 -> 적용됨
#3. 16번 문제처럼 indexOf를 활용해서 i번호와 s.indexOf(s[i])가 일치하지 않으면 걸러내기
#4 answer을 배열로 만들어주고 배열에 담아주기
*/
