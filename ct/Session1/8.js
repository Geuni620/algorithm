/* // 내가 푼 방법
function solution(arr) {
  let answer = [];
  let sum = 100;
  let count = 0;

  arr = arr.sort((a, b) => a - b);

  for (let x of arr) {
    count++;
    sum -= x;

    if (count <= 7) {
      answer.push(x);

      if (count === 7) {
        return answer;
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
*/

/*
#1. sork를 써서 작은 수로 정렬
#2. 작은수 부터 더하기
#3. 더한 횟수만큼 count ++
#4. count 7이 되면 return
*/

// 답지에 적힌 답
function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => {
    return a + b;
  });

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) == 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }

  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

/*
#1. for문을 중첩으로 돌려서 하나씩 검토해줌.
#2. 총 합은 140이므로 합이 40인 두 개를 걸러내기
#3. splice를 적용해서 두 값을 추출함
#4. 추출할 때 뒤에 것부터 걸러내야함 -> 앞에꺼부터 걸러내면 idx가 밀리기 때문

answer = arr 
 -> 얕은 복사이기 때문에 return으로 answer 해도 동일함.
*/
