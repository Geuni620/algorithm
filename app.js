//boj.kr/2588번
const fs = require(`fs`);
let input = fs.readFileSync(`/dev/stdin`).toString().split("\n");
A = +input[0];
B = +input[1];

B0 = B % 10;

B11 = B % 100;
B2 = Math.floor(B11 / 10);

B3 = Math.floor(B / 100);

console.log(A * B0);
console.log(A * B2);
console.log(A * B3);
console.log(A * B);
