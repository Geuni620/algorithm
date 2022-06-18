function solution(s) {
  if (s.length % 2 === 1) answer = s[Math.floor(s.length / 2)];
  else {
    answer = s[s.length / 2 - 1];
    answer += s[s.length / 2];
  }
  return answer;
}
console.log(solution("KeunHwee"));

/*
#1. 문자의 길이가 홀수인지 짝수인지 부터 파악하기
#2. 홀수라면 length / 2 한 index 값을 추출하기    5/2 = 2.5 -> 2 7/2 = 3.5 -> 3 // length니까!
#3. 출력하기

#4. 짝수라면 length /2 한  indx 값을 추출하고 6/2 = 3
#5. 3이랑 3-1한 값을 추출하기
*/
