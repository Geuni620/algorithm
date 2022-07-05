function solution(s) {
  let answer = "";
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      answer += s[i];

      if (count !== 1) {
        answer += count;
        count = 1;
      }
    }
  }

  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));

/*
1은 생략함, K2HS7E
#1. for문 하나씩 인자값을 받기
#2 s[i]와 s[i+1]이 같으면 count++
#3. 그렇지 않으면, 같은 문자가 끝났으므로 answer += s[i]
#4. 1인 값은 생략하라고 했으니, if로 count가 1이 아닐때 answer += count
#5. count = 1 로 초기화
*/
