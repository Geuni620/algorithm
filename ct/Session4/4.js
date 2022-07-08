function solution(m, product) {
  let p = product;
  let answer = 0;
  let count = 0;

  p.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < p.length; i++) {
    let money = m - (p[i][0] / 2 + p[i][1]);

    count = 1;
    for (let j = 0; j < p.length; j++) {
      // console.log(p[j][0] + p[j][1]);
      if (i !== j && p[j][0] + p[j][1] > money) break;
      if (i !== j && p[j][0] + p[j][1] <= money) {
        count++;
        money -= p[j][0] + p[j][1];
      }
    }
    answer = count;
  }

  return answer;
}

let arr = [
  [6, 6], // 9
  [2, 2], // 3
  [4, 3], // 5
  [4, 5], // 7
  [10, 3], // 8
];
console.log(solution(28, arr));

/* 한번 쭉 다 훓어봐야함.
가격 28, 50%쿠폰 1장 -> 최대학생수

#1. 완전 탐색문제이니, 할인을 기준으로 잡음
#2. 정렬을 해서 가격이 저렴한 순으로 sort 적용
#3. 할인 적용한 후 예산에서 하나씩 가격을 제외시켜나가기
#4. 가격을 제외시키다가 그 가격이 예산보다 적어질 시 return
#5. count를 셀 것


*/
