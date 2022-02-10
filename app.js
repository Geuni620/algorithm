//boj.kr/ 11021번
const fs = require(`fs`);
let input = fs.readFileSync("./input.txt").toString().split(`\n`);

let num = +input[0]; //5
let result = [];

for (let i = 1; i <= num; i++) {
  result = input[i].split(` `);
  console.log(`Case #${i}: ${+result[0] + +result[1]}`);
}
