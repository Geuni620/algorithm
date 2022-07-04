/*
function solution(str) {
  let answer = str.toLowerCase().replace(/[a-z]/g, "");
  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
*/

/*
1. 대문자 소문자 구분을 위해 소문자로 만들어주기
2. 정규식이용해서 a-z까지 문자 지워주기
3. parseInt(answer)로 숫자화하기
*/

function solution(str) {
  let answer = "";
  let s = str.toLowerCase();
  for (x of s) {
    if (!isNaN(x)) answer += x;
  }

  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));

/*
1. isNaN을 이용해서 풀어보기
2. isNaN -> NaN 맞나요?
3. 아니면 숫자이므로 answer에 추가
*/
