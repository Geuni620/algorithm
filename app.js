//boj.kr/ 2742번
const fs = require(`fs`);
let input = fs.readFileSync("./input.txt").toString().split(` `);
let num = Number(input);

let arr = [];
for (i = num; i >= 1; i--) {
  arr += i + `\n`;
}
console.log(arr);
