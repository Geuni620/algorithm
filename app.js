//boj.kr/10950번
const fs = require(`fs`);
let input = fs.readFileSync(`./input.txt`).toString().split("\n");

let Num = [];
for (let i = 1; i <= input[0]; i++) {
  Num = input[i].split(` `);
  console.log(+Num[0] + +Num[1]);
}
