function solution(s) {
  let answer = "";
  let ans = "";
  let spt = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (spt[i] === "A") {
      spt[i] = "#";
    }
    answer += spt[i];
  }
  return answer;
}

let str = "BANANA";
console.log(solution(str));

/* 메서드 써서 해보기
#1. replace 메서드 사용
#2. string도 유사배열객체이므로 index 접근 가능
#3. for문 돌려서 replace로 "A" -> "#" 변경하고 return

// 막혔음 -> 하나씩만 변경되고 인터넷 찾아보니 정규식을 써야함,,, 
arr로 받아서 각 idx에 해당하는 A를 #으로 변경 후 다시 합쳐주기
*/
