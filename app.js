//boj.kr/9498번
const fs = require(`fs`);
let input = fs.readFileSync(`/dev/stdin`).toString().split(" ");
const Num = +input;

if (Num >= 90) {
  console.log("A");
} else if (Num >= 80) {
  console.log("B");
} else if (Num >= 70) {
  console.log("C");
} else if (Num >= 60) {
  console.log("D");
} else {
  console.log("F");
}
