"use strict";
/*
两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

给出两个整数 x 和 y，计算它们之间的汉明距离。

注意：
0 ≤ x, y < 231.

示例:

输入: x = 1, y = 4

输出: 2

解释:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

上面的箭头指出了对应二进制位不同的位置。
* */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  /**
   * 直接 ^ 运算 再得到所有的1 就好了
   * */
  let after_exclusive_or = x ^ y;
  let result = 0;
  while (after_exclusive_or) {
    if (after_exclusive_or & 1) result++;
    after_exclusive_or >>= 1;
  }
  return result;
};
/*
var hammingDistance = function (x: number, y: number): number {
    if (x > y) return hammingDistance(y, x);
    let result = 0;
    while (y) {
        if ((y & 1) !== (x & 1)) result++;
        x >>= 1;
        y >>= 1;

    }
    return result;
};
*/
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(hammingDistance(1, 4), 2);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDYxLuaxieaYjui3neemuy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDYxLuaxieaYjui3neemuy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JJOzs7OztBQUVKOzs7O0dBSUc7QUFDSCxJQUFJLGVBQWUsR0FBRyxVQUFVLENBQVMsRUFBRSxDQUFTO0lBQ2xEOztTQUVLO0lBQ0wsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLE9BQU8sa0JBQWtCLEVBQUU7UUFDekIsSUFBSSxrQkFBa0IsR0FBRyxDQUFDO1lBQUUsTUFBTSxFQUFFLENBQUM7UUFDckMsa0JBQWtCLEtBQUssQ0FBQyxDQUFDO0tBQzFCO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBQ0Y7Ozs7Ozs7Ozs7OztFQVlFO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu5Lik5Liq5pW05pWw5LmL6Ze055qE5rGJ5piO6Led56a75oyH55qE5piv6L+Z5Lik5Liq5pWw5a2X5a+55bqU5LqM6L+b5Yi25L2N5LiN5ZCM55qE5L2N572u55qE5pWw55uu44CCXG5cbue7meWHuuS4pOS4quaVtOaVsCB4IOWSjCB577yM6K6h566X5a6D5Lus5LmL6Ze055qE5rGJ5piO6Led56a744CCXG5cbuazqOaEj++8mlxuMCDiiaQgeCwgeSA8IDIzMS5cblxu56S65L6LOlxuXG7ovpPlhaU6IHggPSAxLCB5ID0gNFxuXG7ovpPlh7o6IDJcblxu6Kej6YeKOlxuMSAgICgwIDAgMCAxKVxuNCAgICgwIDEgMCAwKVxuICAgICAgIOKGkSAgIOKGkVxuXG7kuIrpnaLnmoTnrq3lpLTmjIflh7rkuoblr7nlupTkuozov5vliLbkvY3kuI3lkIznmoTkvY3nva7jgIJcbiogKi9cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0geFxuICogQHBhcmFtIHtudW1iZXJ9IHlcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGhhbW1pbmdEaXN0YW5jZSA9IGZ1bmN0aW9uICh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XG4gIC8qKlxuICAgKiDnm7TmjqUgXiDov5Dnrpcg5YaN5b6X5Yiw5omA5pyJ55qEMSDlsLHlpb3kuoZcbiAgICogKi9cbiAgbGV0IGFmdGVyX2V4Y2x1c2l2ZV9vciA9IHggXiB5O1xuICBsZXQgcmVzdWx0ID0gMDtcbiAgd2hpbGUgKGFmdGVyX2V4Y2x1c2l2ZV9vcikge1xuICAgIGlmIChhZnRlcl9leGNsdXNpdmVfb3IgJiAxKSByZXN1bHQrKztcbiAgICBhZnRlcl9leGNsdXNpdmVfb3IgPj49IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4vKlxudmFyIGhhbW1pbmdEaXN0YW5jZSA9IGZ1bmN0aW9uICh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHggPiB5KSByZXR1cm4gaGFtbWluZ0Rpc3RhbmNlKHksIHgpO1xuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIHdoaWxlICh5KSB7XG4gICAgICAgIGlmICgoeSAmIDEpICE9PSAoeCAmIDEpKSByZXN1bHQrKztcbiAgICAgICAgeCA+Pj0gMTtcbiAgICAgICAgeSA+Pj0gMTtcblxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbiovXG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoaGFtbWluZ0Rpc3RhbmNlKDEsIDQpLCAyKTtcbiJdfQ==
