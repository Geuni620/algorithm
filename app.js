//boj.kr/1330번
const fs = require(`fs`);
let input = fs.readFileSync(`/dev/stdin`).toString().split(" ");
a = +input[0];
b = +input[1];

if (a > b) {
  console.log(`>`);
} else if (a < b) {
  console.log(`<`);
} else {
  console.log(`==`);
}
