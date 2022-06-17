function solution(s) {
  let answer = "";
  let count = 0;
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    count = 0;
    let word = s[i];
    for (let x of word) {
      count++;
    }
    arr.push(count);
  }
  let Max = Math.max(...arr);

  for (let i = 0; i < s.length; i++) {
    if (s[i].length === Max) answer = s[i];
  }
  return answer;
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));

/*
#1. 먼저 for문으로 5개의 단어들을 쭉 출력해보기
#2. for of를 이용해서 문자의 단어별 개수를 count 해보기
#3. count한 값을 배열을 하나만들어서 그곳에 담아주고
#4. Math.Max를 이용해서 해당 숫자가 가장 큰 것을 골라내기
#5. 그 가장 큰 숫자를 단어에서 찾아서 출력하기
*/
