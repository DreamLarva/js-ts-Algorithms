"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。

示例:

输入: 38
输出: 2
解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。
进阶:
你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？
* */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {};
// 暴力解决
function solution1(num) {
  if (num < 10) return num;
  let result = 0;
  while (num) {
    result += num % 10;
    num = Math.trunc(num / 10);
  }
  return solution1(result);
}
/**
 * O(1)的算法
 * 假如一个三位数'abc'，其值大小为s1 = 100 * a + 10 * b + 1 * c，
 * 经过一次各位相加后，变为s2 = a + b + c，减小的差值为(s1 -s2) = 99 * a + 9 * b，
 * 差值可以被9整除，每一个循环都这样，缩小了9的倍数。
 * 当num小于9，即只有一位时，直接返回num，大于9时，如果能被9整除，则返回9（因为不可能返回0也不可能返回两位数及以上的值），
 * 如果不能被整除，就返回被9除的余数。
 * */
function solution2(num) {
  if (num > 9) {
    num = num % 9;
    if (num === 0) return 9;
  }
  return num;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU4LuWQhOS9jeebuOWKoC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjU4LuWQhOS9jeebuOWKoC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7O0lBVUk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLFNBQVMsR0FBRyxVQUFVLEdBQVc7QUFFckMsQ0FBQyxDQUFDO0FBRUYsT0FBTztBQUNQLFNBQVMsU0FBUyxDQUFDLEdBQVc7SUFDMUIsSUFBSSxHQUFHLEdBQUcsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDO0lBRXpCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLE9BQU8sR0FBRyxFQUFFO1FBQ1IsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDbkIsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQzlCO0lBRUQsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUVEOzs7Ozs7O0tBT0s7QUFDTCxTQUFTLFNBQVMsQ0FBQyxHQUFXO0lBQzFCLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtRQUNULEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNULE9BQU8sQ0FBQyxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFFZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq6Z2e6LSf5pW05pWwIG51be+8jOWPjeWkjeWwhuWQhOS4quS9jeS4iueahOaVsOWtl+ebuOWKoO+8jOebtOWIsOe7k+aenOS4uuS4gOS9jeaVsOOAglxyXG5cclxu56S65L6LOlxyXG5cclxu6L6T5YWlOiAzOFxyXG7ovpPlh7o6IDJcclxu6Kej6YeKOiDlkITkvY3nm7jliqDnmoTov4fnqIvkuLrvvJozICsgOCA9IDExLCAxICsgMSA9IDLjgIIg55Sx5LqOIDIg5piv5LiA5L2N5pWw77yM5omA5Lul6L+U5ZueIDLjgIJcclxu6L+b6Zi2OlxyXG7kvaDlj6/ku6XkuI3kvb/nlKjlvqrnjq/miJbogIXpgJLlvZLvvIzkuJTlnKggTygxKSDml7bpl7TlpI3mnYLluqblhoXop6PlhrPov5nkuKrpl67popjlkJfvvJ9cclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJ9IG51bVxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIgYWRkRGlnaXRzID0gZnVuY3Rpb24gKG51bTogbnVtYmVyKSB7XHJcblxyXG59O1xyXG5cclxuLy8g5pq05Yqb6Kej5YazXHJcbmZ1bmN0aW9uIHNvbHV0aW9uMShudW06IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAobnVtIDwgMTApIHJldHVybiBudW07XHJcblxyXG4gICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICB3aGlsZSAobnVtKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IG51bSAlIDEwO1xyXG4gICAgICAgIG51bSA9IE1hdGgudHJ1bmMobnVtIC8gMTApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzb2x1dGlvbjEocmVzdWx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE8oMSnnmoTnrpfms5VcclxuICog5YGH5aaC5LiA5Liq5LiJ5L2N5pWwJ2FiYyfvvIzlhbblgLzlpKflsI/kuLpzMSA9IDEwMCAqIGEgKyAxMCAqIGIgKyAxICogY++8jFxyXG4gKiDnu4/ov4fkuIDmrKHlkITkvY3nm7jliqDlkI7vvIzlj5jkuLpzMiA9IGEgKyBiICsgY++8jOWHj+Wwj+eahOW3ruWAvOS4uihzMSAtczIpID0gOTkgKiBhICsgOSAqIGLvvIxcYlxyXG4gKiDlt67lgLzlj6/ku6Xooqs55pW06Zmk77yM5q+P5LiA5Liq5b6q546v6YO96L+Z5qC377yM57yp5bCP5LqGOeeahOWAjeaVsOOAglxyXG4gKiDlvZNudW3lsI/kuo4577yM5Y2z5Y+q5pyJ5LiA5L2N5pe277yM55u05o6l6L+U5ZuebnVt77yM5aSn5LqOOeaXtu+8jOWmguaenOiDveiiqznmlbTpmaTvvIzliJnov5Tlm54577yI5Zug5Li65LiN5Y+v6IO96L+U5ZueMOS5n+S4jeWPr+iDvei/lOWbnuS4pOS9jeaVsOWPiuS7peS4iueahOWAvO+8ie+8jFxyXG4gKiDlpoLmnpzkuI3og73ooqvmlbTpmaTvvIzlsLHov5Tlm57ooqs56Zmk55qE5L2Z5pWw44CCXHJcbiAqICovXHJcbmZ1bmN0aW9uIHNvbHV0aW9uMihudW06IG51bWJlcikge1xyXG4gICAgaWYgKG51bSA+IDkpIHtcclxuICAgICAgICBudW0gPSBudW0gJSA5O1xyXG4gICAgICAgIGlmIChudW0gPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiA5O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bTtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQge307XHJcbiJdfQ==
