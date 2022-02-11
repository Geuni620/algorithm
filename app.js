//boj.kr/ 2439번
const fs = require(`fs`);
let input = fs.readFileSync("./input.txt").toString().split(` `);
let Num = +input[0];
let star = ``;
let blank = ``;

for (let i = 1; i <= Num; i++) {
  star += `*`;

  for (let j = 0; j < Num - i; j++) {
    blank += ` `;
  }
  console.log(blank + star);
  blank = ``;
}
