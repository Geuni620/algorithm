function solution(arr) {
  let answer = 1;
  let count = 1;
  let f = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (f < arr[i]) {
      count++;
      f = arr[i];
    }
  }
  answer = count;
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));

/*
제일 키 큰 학생 구하라는 뜻
#1. console.log(arr)를 읽어보기 
#2. max에 처음 들어갈 값으로 가장 작은 값을 넣어주기
#3. for of 를 돌면서 x가 max보다 클 경우 max = x로 지정
#4. 결괏값을 answer로 넣고 리턴

## 문제를 잘못 이해했음... 앞사람보다 뒷사람이 클 경우 count를 해서 총 몇명이 보이는지 구하면 됨
#1. 똑같이 console.log(arr)로 읽어보기
#2. 앞사람과 뒷사람을 비교해서 뒷사람이 더 클 경우, count++ 해주기
#3. for문돌려서 반복하고 return

#4. 만약 2번째 키가 145이고 3번째 키가 140이고 4번째 키가 150이라면 어쨌든 150은 count++ 해주고 140은 count++되면 안됨
#5. 그래서 첫 번째 값을 변수에 담아주고, 그 값보다 큰 값이 나오면 count ++ 그리고 큰 값을 다시 변수에 담아주기
#6. 반복하면서 count를 answer에 저장 -> return

참고로 맨 앞에 학생은 키와 상관없이 보이기 때문에 count=0이 아니라 count=1에서 시작!
*/
