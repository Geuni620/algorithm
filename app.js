//boj.kr/1008
const fs = require(`fs`);
let input = fs.readFileSync(`/dev/stdin`).toString().split(` `);
a = +input[0];
b = +input[1];

console.log(a / b);
