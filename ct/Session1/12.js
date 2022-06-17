function solution(s) {
  let answer = ``;

  for (let x of s) {
    if (96 < x.charCodeAt() < 123) {
      answer += x.toUpperCase();
    } else {
      answer += x;
    }
  }
  return answer;
}

let str = "ItisTimeToStudymyNameIs";
console.log(solution(str));

/*
#1. toUpperCase()를 써서 대문자로 변경
*/

/* 
아스키 코드로 변환해보기
소문자는 96 < 97~122 < 123
대문자는 65~90까지

#1. for문 돌려서 각 소문자 대문자를 받음
#2 아스키 번호가 97~122에 해당할 경우 대문자로 변경시켜주기
#3 아스키 번호가 65~90일 경우엔 그냥 += 로 붙여주기
#4. return
*/
