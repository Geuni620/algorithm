function solution(s) {
  let answer = ``;
  for (let i = 0; i < s.length; i++) {
    if (i === s.indexOf(s[i])) answer += s[i];
  }
  return answer;
}

console.log(solution("ksekkset"));
// console.log(solution("leekeunhwee"));

/*
#1. for문으로 하나씩 인자값으로 받아보기
#2. indexOf를 이용해서 idx 번호 확인하기 -> 중복되는 값은 idx 번호와 indexOf 번호가 일치하지 않음
#3. 일치하지 않는 번호를 제외하고 answer에 붙여주기 -> 완료
*/
