function solution(s) {
  let answer = "";

  for (let x of s) {
    let num = x.charCodeAt();
    if (num > 64 && num < 90) answer += String.fromCharCode(num + 32);
    if (num > 96 && num < 123) answer += String.fromCharCode(num - 32);
  }

  return answer;
}

console.log(solution("StuDY"));

/*
대소문자 아스키넘버의 차이 값인 32를 이용해서 풀어보기
#1. 아스키넘버로 변환시켜줌
#2.변환된 값이 해당 65~90일 경우 대문자 -> 소문자로 변경
#3. 변환된 값이 해당 97~122일 경우 소문자 -> 대문자로 변경시켜주기
chatCodeAt / fromCharCode
*/
