//boj.kr/10869번
//예제 입력 7 3
//예쩨 출력 10 4 21 2 1
const fs = require(`fs`);
let input = fs.readFileSync(`dev/stdin`).toString().split(` `);

A = +input[0];
B = +input[1];

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
console.log(A % B);
