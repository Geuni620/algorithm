//boj.kr/2739번
const fs = require(`fs`);
let input = fs.readFileSync(`./input.txt`).toString().split(` `);
let Num = Number(input[0]);

for (let i = 1; i < 10; i++) {
  let result = Num * i;
  console.log(`${Num} * ${i} = ${result}`);
}
