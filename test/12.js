function getDigits(num) {
  let digit = 0;
  while (num !== 0) {
    num /= 10;
    num = Math.floor(num);
    digit++;
  }
  return digit;
}

console.log(getDigits(100.11));


const _ = require("lodash")

console.log(_.floor(-0.0057 * 100, 2));
console.log(_.floor(-0.0057 * 100, 1))
