function solution(a, b, c) {
  let answer;
  let cdt = a + b > c && a + c > b && b + c > a;

  if (cdt) {
    return (answer = "YES");
  } else {
    return (answer = "NO");
  }
}

console.log(solution(13, 33, 17)); // no
console.log(solution(6, 7, 11)); // yes

/*
조건을 모르겠으나,
yes보기와 no보기를 보니, 두 수를 더했을 때 더한 수가 더 커야함

#1. if문을 통해서 a + b > c 인지 확인
#2  a + c > b 인지 확인
#3. b + c > a
모든 조건이 완료되면 yes, 아닐 시 no
*/
