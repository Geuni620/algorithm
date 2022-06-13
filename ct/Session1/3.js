function solution(n) {
  let answer;
  return (answer = Math.ceil(n / 12));
}

console.log(solution(25));

/*
#1. 다스는 12개이므로 178명을 12로 나눴을 경우 14.xxx가 나옴
#2. 즉 다스는 14+1개 필요함 -> 올림으로 처리
#3. 다스만 물어봤음, 나머지는 물어보지 않았음
*/
