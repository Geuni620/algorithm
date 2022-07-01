function solution(s) {
  let answer = "YES";
  let S = s.toUpperCase();

  /*
  let front = "";
  let back = "";
  
  for (let i = 0; i < 1; i++) {
    fornt = "";
    back = "";
    for (let j = 0; j < S.length; j++) {
      front += S[j];
    }

    for (let k = S.length - 1; k >= 0; k--) {
      back += S[k];
    }
    console.log(front, back);

    if (front == back) ans = "Yes";
    else ans = "No";
  }

  answer = ans;
  */

  // Method를 이용
  let reverse = S.split("").reverse().join("");
  if (reverse !== S) return "NO";

  return answer;
}

let str = "Goog";
console.log(solution(str));

/* 회문문자열일 경우 YES 출력하기
#1. 대문자로 또는 소문자로 변환해주기
#2. 앞으로 다 돌려서 만들어진 front와 뒤로 돌려서 만들어진 Back이 같을경우 YES 출력해주기
#3. 같지 않을 경우 NO출력해주기
*/
