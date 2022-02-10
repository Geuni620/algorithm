//boj.kr/ 2438번
const fs = require(`fs`);
let input = fs.readFileSync("./input.txt").toString().split(`\n`);
let Num = +input[0]; //5

let result = ``;
for (i = 1; i <= Num; i++) {
  result += `*`;
  console.log(result);
}
