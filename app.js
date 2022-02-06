//boj.kr/2884번
const fs = require(`fs`);
let input = fs.readFileSync(`./input.txt`).toString().split(` `); //10 10
const H = Number(input[0]);
const M = Number(input[1]);

if (M >= 45) {
  let M1 = M - 45;
  console.log(H, M1);
} else if (M < 45) {
  if (H < 1) {
    let H1 = 23;
    M1 = M - 45 + 60;
    console.log(H1, M1);
  } else {
    H1 = H - 1;
    M1 = M - 45 + 60;
    console.log(H1, M1);
  }
}
