function solution(s) {
  let answer = 0;
  let F = s.toUpperCase(); // 대문자로 변환

  for (let i = 0; i < s.length; i++) {
    if (s[i] === F[i]) answer++;
  }

  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));

/*
#1. 기존 str을 하나 담아 놓기
#2. 메서드를 이용해서 str을 대문자로 변경해보기
#3. 기존 값과 대문자 값을 하나씩 비교해보며 같은 값만 count 하기
#4. count 한 값을 출력하기
*/
