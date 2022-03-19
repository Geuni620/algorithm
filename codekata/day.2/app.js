/*
reverse 함수에 정수인 숫자를 인자로 받습니다. 그 숫자를 뒤집어서 return해주세요.
x: 숫자 return: 뒤집어진 숫자를 반환!
예들 들어, x: 1234 return: 4321
x: -1234 return: -4321
x: 1230 return: 321
*/

/* 
1. -인지 +인지 확인할 수 있는 origin 값을 받아놓기
2. 변수 하나를 선언하고 -값이라면 절대값 구해주기
3. 절대값을 string으로 만든 뒤 split해주기
4. split해준 strX를 reverse해서 값을 뒤집어주고 join 메서드로 다시 합쳐줌
5. Number로 숫자로 만들어 준 뒤, 초기 origin 값이 -였을 경우 * -1 해주고, 아닐 경우 그냥 return

*삼항연산자에서 return을 적용했을 시 return 되지않는다는 사실을 알게 됨
*절대값 Math.abs() 메서드를 사용해봄
*/

const reverse = (x) => {
  // 여기에 코드를 작성해주세요.
  let oriX = x;
  let absX;

  oriX < 0 ? (absX = Math.abs(oriX)) : (absX = oriX);

  let strX = String(absX).split("");
  let ans = Number(strX.reverse().join(""));

  oriX < 0 ? (ans = ans * -1) : ans;
  return ans;
};

const x = -1234;
console.log(reverse(x));
