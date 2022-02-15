const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(` `);

// repeat를 이용한 방법
solution(input);
function solution(N) {
  let star = ``;
  let blank = ``;
  for (let i = 1; i <= N; i++) {
    star = `*`.repeat(i);
    blank = ` `.repeat(N - i);
    console.log(blank + star);
  }
}

//오직 for문을 이용한 방법
solution(input);
function solution(N) {
  let star = ``;
  let blank = ``;
  for (let i = 0; i < N; i++) {
    star += `*`;
    for (let j = 0; j < N - i; j++) {
      blank += ` `;
    }
    console.log(blank + star);
    blank = ``;
  }
}
