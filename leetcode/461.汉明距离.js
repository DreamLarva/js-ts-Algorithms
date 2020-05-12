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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDYxLuaxieaYjui3neemuy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDYxLuaxieaYjui3neemuy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JJOzs7OztBQUVKOzs7O0dBSUc7QUFDSCxJQUFJLGVBQWUsR0FBRyxVQUFVLENBQVMsRUFBRSxDQUFTO0lBQ2hEOztTQUVLO0lBQ0wsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLE9BQU8sa0JBQWtCLEVBQUU7UUFDdkIsSUFBSSxrQkFBa0IsR0FBRyxDQUFDO1lBQUUsTUFBTSxFQUFFLENBQUM7UUFDckMsa0JBQWtCLEtBQUssQ0FBQyxDQUFDO0tBRTVCO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBQ0Y7Ozs7Ozs7Ozs7OztFQVlFO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLGVBQWUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQ3BCLENBQUMsQ0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu5Lik5Liq5pW05pWw5LmL6Ze055qE5rGJ5piO6Led56a75oyH55qE5piv6L+Z5Lik5Liq5pWw5a2X5a+55bqU5LqM6L+b5Yi25L2N5LiN5ZCM55qE5L2N572u55qE5pWw55uu44CCXHJcblxyXG7nu5nlh7rkuKTkuKrmlbTmlbAgeCDlkowgee+8jOiuoeeul+Wug+S7rOS5i+mXtOeahOaxieaYjui3neemu+OAglxyXG5cclxu5rOo5oSP77yaXHJcbjAg4omkIHgsIHkgPCAyMzEuXHJcblxyXG7npLrkvos6XHJcblxyXG7ovpPlhaU6IHggPSAxLCB5ID0gNFxyXG5cclxu6L6T5Ye6OiAyXHJcblxyXG7op6Pph4o6XHJcbjEgICAoMCAwIDAgMSlcclxuNCAgICgwIDEgMCAwKVxyXG4gICAgICAg4oaRICAg4oaRXHJcblxyXG7kuIrpnaLnmoTnrq3lpLTmjIflh7rkuoblr7nlupTkuozov5vliLbkvY3kuI3lkIznmoTkvY3nva7jgIJcclxuKiAqL1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBoYW1taW5nRGlzdGFuY2UgPSBmdW5jdGlvbiAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiDnm7TmjqUgXiDov5Dnrpcg5YaN5b6X5Yiw5omA5pyJ55qEMSDlsLHlpb3kuoZcclxuICAgICAqICovXHJcbiAgICBsZXQgYWZ0ZXJfZXhjbHVzaXZlX29yID0geCBeIHk7XHJcbiAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgIHdoaWxlIChhZnRlcl9leGNsdXNpdmVfb3IpIHtcclxuICAgICAgICBpZiAoYWZ0ZXJfZXhjbHVzaXZlX29yICYgMSkgcmVzdWx0Kys7XHJcbiAgICAgICAgYWZ0ZXJfZXhjbHVzaXZlX29yID4+PSAxO1xyXG5cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbi8qXHJcbnZhciBoYW1taW5nRGlzdGFuY2UgPSBmdW5jdGlvbiAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKHggPiB5KSByZXR1cm4gaGFtbWluZ0Rpc3RhbmNlKHksIHgpO1xyXG4gICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICB3aGlsZSAoeSkge1xyXG4gICAgICAgIGlmICgoeSAmIDEpICE9PSAoeCAmIDEpKSByZXN1bHQrKztcclxuICAgICAgICB4ID4+PSAxO1xyXG4gICAgICAgIHkgPj49IDE7XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuKi9cclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgaGFtbWluZ0Rpc3RhbmNlKDEsNCksXHJcbiAgICAyXHJcbik7XHJcbiJdfQ==
