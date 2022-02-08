//boj.kr/ 8393번
const fs = require(`fs`);
let input = fs.readFileSync(`./input.txt`).toString().split(" ");
num = +input[0]; //5

let a = 0;
for (let i = 1; i <= num; i++) {
  a = a + i;
}

console.log(a);
