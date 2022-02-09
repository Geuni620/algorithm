//boj.kr/ 2741번
const fs = require(`fs`);
let input = fs.readFileSync("./input.txt").toString().split(` `);
let num = Number(input[0]);

let arr = [];
for (let i = 1; i <= num; i++) {
  arr += i + `\n`;
}
console.log(arr);
