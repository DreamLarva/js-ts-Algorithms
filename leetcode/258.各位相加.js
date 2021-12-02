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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU4LuWQhOS9jeebuOWKoC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjU4LuWQhOS9jeebuOWKoC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7O0lBVUk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLFNBQVMsR0FBRyxVQUFVLEdBQVcsSUFBRyxDQUFDLENBQUM7QUFFMUMsT0FBTztBQUNQLFNBQVMsU0FBUyxDQUFDLEdBQVc7SUFDNUIsSUFBSSxHQUFHLEdBQUcsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDO0lBRXpCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLE9BQU8sR0FBRyxFQUFFO1FBQ1YsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDbkIsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQzVCO0lBRUQsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQUVEOzs7Ozs7O0tBT0s7QUFDTCxTQUFTLFNBQVMsQ0FBQyxHQUFXO0lBQzVCLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtRQUNYLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3pCO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4qumdnui0n+aVtOaVsCBudW3vvIzlj43lpI3lsIblkITkuKrkvY3kuIrnmoTmlbDlrZfnm7jliqDvvIznm7TliLDnu5PmnpzkuLrkuIDkvY3mlbDjgIJcblxu56S65L6LOlxuXG7ovpPlhaU6IDM4XG7ovpPlh7o6IDJcbuino+mHijog5ZCE5L2N55u45Yqg55qE6L+H56iL5Li677yaMyArIDggPSAxMSwgMSArIDEgPSAy44CCIOeUseS6jiAyIOaYr+S4gOS9jeaVsO+8jOaJgOS7pei/lOWbniAy44CCXG7ov5vpmLY6XG7kvaDlj6/ku6XkuI3kvb/nlKjlvqrnjq/miJbogIXpgJLlvZLvvIzkuJTlnKggTygxKSDml7bpl7TlpI3mnYLluqblhoXop6PlhrPov5nkuKrpl67popjlkJfvvJ9cbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IG51bVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgYWRkRGlnaXRzID0gZnVuY3Rpb24gKG51bTogbnVtYmVyKSB7fTtcblxuLy8g5pq05Yqb6Kej5YazXG5mdW5jdGlvbiBzb2x1dGlvbjEobnVtOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAobnVtIDwgMTApIHJldHVybiBudW07XG5cbiAgbGV0IHJlc3VsdCA9IDA7XG4gIHdoaWxlIChudW0pIHtcbiAgICByZXN1bHQgKz0gbnVtICUgMTA7XG4gICAgbnVtID0gTWF0aC50cnVuYyhudW0gLyAxMCk7XG4gIH1cblxuICByZXR1cm4gc29sdXRpb24xKHJlc3VsdCk7XG59XG5cbi8qKlxuICogTygxKeeahOeul+azlVxuICog5YGH5aaC5LiA5Liq5LiJ5L2N5pWwJ2FiYyfvvIzlhbblgLzlpKflsI/kuLpzMSA9IDEwMCAqIGEgKyAxMCAqIGIgKyAxICogY++8jFxuICog57uP6L+H5LiA5qyh5ZCE5L2N55u45Yqg5ZCO77yM5Y+Y5Li6czIgPSBhICsgYiArIGPvvIzlh4/lsI/nmoTlt67lgLzkuLooczEgLXMyKSA9IDk5ICogYSArIDkgKiBi77yMXGJcbiAqIOW3ruWAvOWPr+S7peiiqznmlbTpmaTvvIzmr4/kuIDkuKrlvqrnjq/pg73ov5nmoLfvvIznvKnlsI/kuoY555qE5YCN5pWw44CCXG4gKiDlvZNudW3lsI/kuo4577yM5Y2z5Y+q5pyJ5LiA5L2N5pe277yM55u05o6l6L+U5ZuebnVt77yM5aSn5LqOOeaXtu+8jOWmguaenOiDveiiqznmlbTpmaTvvIzliJnov5Tlm54577yI5Zug5Li65LiN5Y+v6IO96L+U5ZueMOS5n+S4jeWPr+iDvei/lOWbnuS4pOS9jeaVsOWPiuS7peS4iueahOWAvO+8ie+8jFxuICog5aaC5p6c5LiN6IO96KKr5pW06Zmk77yM5bCx6L+U5Zue6KKrOemZpOeahOS9meaVsOOAglxuICogKi9cbmZ1bmN0aW9uIHNvbHV0aW9uMihudW06IG51bWJlcikge1xuICBpZiAobnVtID4gOSkge1xuICAgIG51bSA9IG51bSAlIDk7XG4gICAgaWYgKG51bSA9PT0gMCkgcmV0dXJuIDk7XG4gIH1cbiAgcmV0dXJuIG51bTtcbn1cblxuZXhwb3J0IHt9O1xuIl19
