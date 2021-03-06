/**
 *
 * @param {number} n N 킬로그램의 설탕 총량
 * @returns {number} 봉지의 수
 */

const fs = require('fs');
const n = +fs.readFileSync('/dev/stdin').toString().trim();

const INFINITE = 10000;
let x = INFINITE,
  y = INFINITE;

for (let _5의몫 = Math.floor(n / 5); _5의몫 >= 0; _5의몫 -= 1) {
  if ((n - 5 * _5의몫) % 3 === 0) {
    const _x = _5의몫;
    const _y = (n - 5 * _5의몫) / 3;

    if (x + y > _x + _y) {
      x = _x;
      y = _y;
    }
  }
}

if (x + y > INFINITE) {
  console.log(-1);
  return;
}

console.log(x + y);
