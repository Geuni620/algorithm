function solution(arr) {
  let answer = 0;
  let dx = [1, 0, -1, 0];
  let dy = [0, -1, 0, 1];
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let chk = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];

        if (nx >= 0 && nx < n && arr[nx][ny] >= arr[i][j] && ny >= 0 && ny < n)
          chk = 0;
      }
      if (chk) answer++;
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));

/*
!풀지 못했음 다시 풀어보기!
#1. dx dy로 4방향 점검을 위한 좌표설정
#2. for문 3단으로 만들고 nx, ny 방향을 지정해주기 -> 현재 위치를 기준으로 상하좌우 4방향 탐색
#3. chk를 1로 지정해주고 0이 되면 참이 아님.
#4. nx ny는 0보다 커야하고(0보다 작을 시 undefined) n(arr.length) 보다는 작아야함.
#5. arr[nx][ny]가 arr[i][j]보다 클 경우 chk = 0으로 설정
#6. chk가 0이 아닐 경우 answer++ 로 count해주기
*/
