/*
twoSum함수에 숫자배열과 '특정 수'를 인자로 넘기면, 더해서 '특정 수'가 나오는 index를 배열에 담아 return해 주세요.

nums: 숫자 배열
target: 두 수를 더해서 나올 수 있는 합계
return: 두 수의 index를 가진 숫자 배열

예를 들어,
nums: 숫자 배열
target: 두 수를 더해서 나올 수 있는 합계
return: 두 수의 index를 가진 숫자 배열

예를 들어,
nums은 [4, 9, 11, 14] target은 13

nums[0] + nums[1] = 4 + 9 = 13 이죠?

그러면 [0, 1]이 return 되어야 합니다.

*/

/*
중첩for문을 통해서 i, j를 각각 모두 순회하게 만든 후 원하는 target과 같아졌을 때 return 하도록 구현했음.
추가로 for문보다 비교적 덜 익숙한 while문을 통해서 다른 방법을 고안해봄.
결과적으로 i는 고정된 상태에서 j를 하나씩 증가시켜보며 target 값과 맞춰보고, 일치하지 않을 경우 i에 +1해준 뒤 다시 j를 순회하며
target 값과 비교해보는 식으로 index 배열 i와 j를 찾음

*/

let target = 25;
function solution(nums, target) {
  let i = 0;
  let j = 0;
  let ans = [];
  let sum = 0;

  while (true) {
    j++;
    sum = nums[i] + nums[j];
    if (sum === target) {
      ans.push(i, j);
      return ans;
    } else if (nums[i] + nums[j] !== target) {
      i++;
    }
  }
}

console.log(solution(input, target));
