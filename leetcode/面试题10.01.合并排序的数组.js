"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

初始化 A 和 B 的元素数量分别为 m 和 n。

示例:

输入:
A = [1,2,3,0,0,0], m = 3
B = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
说明:

A.length == n + m

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sorted-merge-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
  // 从A数组末端 依照次序 放进两个数组的最大值
  let index = m + n - 1;
  let lastA = m - 1;
  let lastB = n - 1;
  while (index >= 0) {
    if (lastA < 0) {
      A.splice(0, lastB + 1, ...B.slice(0, lastB + 1));
      break;
    }
    if (lastB < 0) {
      break;
    }
    if (A[lastA] > B[lastB]) {
      A[index] = A[lastA];
      lastA--;
    } else {
      A[index] = B[lastB];
      lastB--;
    }
    index--;
  }
  return A;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(
  merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3),
  [1, 2, 2, 3, 5, 6]
);
assert_1.default.deepStrictEqual(merge([0], 0, [1], 1), [1]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi6Z2i6K+V6aKYMTAuMDEu5ZCI5bm25o6S5bqP55qE5pWw57uELmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS/pnaLor5XpopgxMC4wMS7lkIjlubbmjpLluo/nmoTmlbDnu4QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1CSTtBQUNKOzs7Ozs7R0FNRztBQUNILElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBVyxFQUFFLENBQVMsRUFBRSxDQUFXLEVBQUUsQ0FBUztJQUNsRSx5QkFBeUI7SUFDekIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQixJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLE9BQU8sS0FBSyxJQUFJLENBQUMsRUFBRTtRQUNqQixJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDYixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakQsTUFBTTtTQUNQO1FBRUQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsTUFBTTtTQUNQO1FBQ0QsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsS0FBSyxFQUFFLENBQUM7U0FDVDthQUFNO1lBQ0wsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixLQUFLLEVBQUUsQ0FBQztTQUNUO1FBRUQsS0FBSyxFQUFFLENBQUM7S0FDVDtJQUNELE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtJQUNqRSxDQUFDO0lBQ0QsQ0FBQztJQUNELENBQUM7SUFDRCxDQUFDO0lBQ0QsQ0FBQztJQUNELENBQUM7Q0FDRixDQUFDLENBQUM7QUFDSCxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5Lik5Liq5o6S5bqP5ZCO55qE5pWw57uEIEEg5ZKMIELvvIzlhbbkuK0gQSDnmoTmnKvnq6/mnInotrPlpJ/nmoTnvJPlhrLnqbrpl7TlrrnnurMgQuOAgiDnvJblhpnkuIDkuKrmlrnms5XvvIzlsIYgQiDlkIjlubblhaUgQSDlubbmjpLluo/jgIJcblxu5Yid5aeL5YyWIEEg5ZKMIEIg55qE5YWD57Sg5pWw6YeP5YiG5Yir5Li6IG0g5ZKMIG7jgIJcblxu56S65L6LOlxuXG7ovpPlhaU6XG5BID0gWzEsMiwzLDAsMCwwXSwgbSA9IDNcbkIgPSBbMiw1LDZdLCAgICAgICBuID0gM1xuXG7ovpPlh7o6IFsxLDIsMiwzLDUsNl1cbuivtOaYjjpcblxuQS5sZW5ndGggPT0gbiArIG1cblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3NvcnRlZC1tZXJnZS1sY2NpXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gQVxuICogQHBhcmFtIHtudW1iZXJ9IG1cbiAqIEBwYXJhbSB7bnVtYmVyW119IEJcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKiBAcmV0dXJuIHt2b2lkfSBEbyBub3QgcmV0dXJuIGFueXRoaW5nLCBtb2RpZnkgQSBpbi1wbGFjZSBpbnN0ZWFkLlxuICovXG52YXIgbWVyZ2UgPSBmdW5jdGlvbiAoQTogbnVtYmVyW10sIG06IG51bWJlciwgQjogbnVtYmVyW10sIG46IG51bWJlcikge1xuICAvLyDku45B5pWw57uE5pyr56uvIOS+neeFp+asoeW6jyDmlL7ov5vkuKTkuKrmlbDnu4TnmoTmnIDlpKflgLxcbiAgbGV0IGluZGV4ID0gbSArIG4gLSAxO1xuICBsZXQgbGFzdEEgPSBtIC0gMTtcbiAgbGV0IGxhc3RCID0gbiAtIDE7XG4gIHdoaWxlIChpbmRleCA+PSAwKSB7XG4gICAgaWYgKGxhc3RBIDwgMCkge1xuICAgICAgQS5zcGxpY2UoMCwgbGFzdEIgKyAxLCAuLi5CLnNsaWNlKDAsIGxhc3RCICsgMSkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGxhc3RCIDwgMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChBW2xhc3RBXSA+IEJbbGFzdEJdKSB7XG4gICAgICBBW2luZGV4XSA9IEFbbGFzdEFdO1xuICAgICAgbGFzdEEtLTtcbiAgICB9IGVsc2Uge1xuICAgICAgQVtpbmRleF0gPSBCW2xhc3RCXTtcbiAgICAgIGxhc3RCLS07XG4gICAgfVxuXG4gICAgaW5kZXgtLTtcbiAgfVxuICByZXR1cm4gQTtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChtZXJnZShbMSwgMiwgMywgMCwgMCwgMF0sIDMsIFsyLCA1LCA2XSwgMyksIFtcbiAgMSxcbiAgMixcbiAgMixcbiAgMyxcbiAgNSxcbiAgNixcbl0pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChtZXJnZShbMF0sIDAsIFsxXSwgMSksIFsxXSk7XG4iXX0=
