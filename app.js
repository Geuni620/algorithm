//boj.kr/14681번
//fs모듈 사용시 런타임 에러 발생 -> readline 처음 사용해봄.

//fs
const fs = require(`fs`);
let input = fs.readFileSync(`/dev/stdin`).toString().split("\n").trim();
const x = +input[0];
const y = +input[1];

if (x > 0 && y > 0) {
  console.log(1);
} else if (x < 0 && y > 0) {
  console.log(2);
} else if (x < 0 && y < 0) {
  console.log(3);
} else if (x > 0 && y < 0) {
  console.log(4);
}

//readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const x = +input[0];
  const y = +input[1];

  if (x > 0 && y > 0) {
    console.log(1);
  } else if (x < 0 && y > 0) {
    console.log(2);
  } else if (x < 0 && y < 0) {
    console.log(3);
  } else if (x > 0 && y < 0) {
    console.log(4);
  }
  process.exit();
});
