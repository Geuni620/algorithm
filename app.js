//boj.kr/ 15552번
const fs = require(`fs`);
let input = fs.readFileSync(`./input.txt`).toString().split(`\n`);
let num = Number(input[0]); //5
let inputSum = ``;

for (let i = 1; i <= num; i++) {
  let inputSplit = input[i].split(` `);
  inputSum += Number(inputSplit[0]) + Number(inputSplit[1]) + `\n`;
}
console.log(inputSum);
