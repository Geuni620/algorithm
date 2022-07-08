function solution(test) {
  let answer = 0;
  let n = test[0].length;
  let m = test.length;
  let tmp = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let count = 0;
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) count++;
      }
      if (count === 3) {
        answer++;
        tmp.push([i, j]);
      }
    }
  }
  console.log(tmp);
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));

/* 대표적인 블루투포스, 못풀어서 답을 확인함
#1. 4중 for문을 사용할 것 -> 바깥부분부터 1, 2, 3, 4로 명명함
#2. 먼저 1, 2 for문 만들기 -> 용도는 총 12개의 값(3번학생, 4번학생)을 찾는 용도
    -> 그래서 1~4까지 있고, 총 4명의 학생이 자기자신 포함하여 1명당 4번 비교해봐야함 -> 총 16번 비교

#3. 3, 4번 for문은 test[k][s]용도, 즉 index를 담당해줌. 4 x 3 매트릭스 형태
#4. 만약 test[k][s] === i 라고 지정해줬을 때, 예시를 들어보자
    -> test[0][0] === i 라고 지정해줬을 때 , test[0][0]은 3이고, 3은 i가 0임
    -> test[0][2] === j 라고 지정해줬을 때, test[0][2]는 1이고, 1은 j가 2임
    -> i와 j를 비교해서 i의 등수가 더 높으므로 count++해줌
#5. 총 3열까지 있으므로 count = m(3)이면, 해당하는 i는 j보다 모두 등수가 뛰어나므로 answer ++ 해줌
#6. 즉 총 3개 나옴 (3,1) (3,2) (4,2)
*/
