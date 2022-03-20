/*
strss은 단어가 담긴 배열입니다. 공통된 시작 단어(prefix)를 반환해주세요.
예를 들어 strss = ['start', 'stair', 'step'] return은 'st'
strss = ['start', 'wework', 'today'] return은 ''
*/

/*
1. start 한번 다 담아보기 
2. stair 추가하고 중복된 sta만 받아보기 
3. step 추가하고 중복된 st만 받아보기
4. 같은 값이 없으면 return = ""
*/

/*
const getPrefix = (strs) => {
  let ans = [];
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs[i].length; j++) {
      ans.push(strs[i][j]);
    }
  }

  //중복값 제거
  let ansSet = Array.from(new Set(ans));

  //배열의 마지막값 추출

  let idx = strs.length - 1;
  let cp = strs[idx]; // step

  let res = [];


*/

/*
  
  for (let i = 0; i < cp[0].length; i++) {
    if (cp.indexOf(ans[i]) !== -1) {
      res.push(ans[i]);
    }
    
  }

  */
// console.log(res);
// for (let i = 0; i < ansSet.length; i++) {}

const getPrefix = (strs) => {
  let prefix = strs[0]; // start
  if (strs.length < 1) {
    return "";
  }
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[i][j] !== prefix[j]) {
        prefix = strs[i].slice(0, j);
      }
    }
  }
  return prefix;
};

const strs = ["start", "stair", "step"];
// const strs = ["start", "wework", "today"];
console.log(getPrefix(strs));
