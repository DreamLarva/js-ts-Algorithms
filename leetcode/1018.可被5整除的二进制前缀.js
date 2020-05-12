"use strict";
/*
给定由若干 0 和 1 组成的数组 A。我们定义 N_i：从 A[0] 到 A[i] 的第 i 个子数组被解释为一个二进制数（从最高有效位到最低有效位）。

返回布尔值列表 answer，只有当 N_i 可以被 5 整除时，答案 answer[i] 为 true，否则为 false。



示例 1：

输入：[0,1,1]
输出：[true,false,false]
解释：
输入数字为 0, 01, 011；也就是十进制中的 0, 1, 3 。只有第一个数可以被 5 整除，因此 answer[0] 为真。
示例 2：

输入：[1,1,1]
输出：[false,false,false]
示例 3：

输入：[0,1,1,1,1,1]
输出：[true,false,false,false,true,false]
示例 4：

输入：[1,1,1,0,1]
输出：[false,false,false,false,false]

提示：
1 <= A.length <= 30000
A[i] 为 0 或 1
* */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} A
 * @return {boolean[]}
 */
/**
 * 正确的解法
 * */
function prefixesDivBy52(A) {
  // 暂存上一次的结果
  let num = 0;
  return A.map((val) => {
    // 被除数 * 2 除数不变 的话 那么原来商 * 2 原来余数 * 2
    // 但是 商 和 除数 是不影响 余数的 所以 只需要保留 余数 * 2 即可
    num = ((num << 1) + val) % 5;
    return num % 5 === 0;
  });
}
var prefixesDivBy5 = function (A) {
  let index = 0;
  const result = [];
  while (index < A.length) {
    result.push(isPrefixesDivBy5(A.slice(0, index + 1)));
    index++;
  }
  return result;
};
const remainder_map = [6, 2, 4, 8];
// 二进制数字 按照规律反复出现
function isPrefixesDivBy5(arr) {
  const last = arr[arr.length - 1];
  arr.reverse();
  const all_single = arr.reduce((pre, cur, index) => {
    if (cur === 0 || index === 0) return pre;
    return pre + remainder_map[index % 4];
  }, 0);
  return (all_single + last) % 5 === 0;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(prefixesDivBy5([0, 1, 1]), [
  true,
  false,
  false,
]);
assert_1.default.deepStrictEqual(prefixesDivBy5([0, 1, 1, 1, 1, 1]), [
  true,
  false,
  false,
  false,
  true,
  false,
]);
assert_1.default.deepStrictEqual(
  prefixesDivBy5([
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
  ]),
  [
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    false,
    false,
    false,
  ]
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAxOC7lj6/ooqs15pW06Zmk55qE5LqM6L+b5Yi25YmN57yALmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xMDE4LuWPr+iiqzXmlbTpmaTnmoTkuozov5vliLbliY3nvIAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTZCSTs7Ozs7QUFFSjs7O0dBR0c7QUFDSDs7S0FFSztBQUNMLFNBQVMsZUFBZSxDQUFDLENBQVU7SUFDL0IsV0FBVztJQUNYLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNmLHFDQUFxQztRQUNyQyx3Q0FBd0M7UUFDeEMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDO0FBR0QsSUFBSSxjQUFjLEdBQUcsVUFBVSxDQUFVO0lBQ3JDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixPQUFPLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxLQUFLLEVBQUUsQ0FBQztLQUNYO0lBQ0QsT0FBTyxNQUFNLENBQUE7QUFDakIsQ0FBQyxDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUVuQyxpQkFBaUI7QUFDakIsU0FBUyxnQkFBZ0IsQ0FBQyxHQUFZO0lBQ2xDLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRWpDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNkLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQzlDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQztZQUFFLE9BQU8sR0FBRyxDQUFDO1FBQ3pDLE9BQU8sR0FBRyxHQUFHLGFBQWEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ04sT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFFRCxvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDekIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUN2QixDQUFDO0FBRUYsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDbEMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUMzQyxDQUFDO0FBRUYsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNqTSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FDaFosQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprnlLHoi6XlubIgMCDlkowgMSDnu4TmiJDnmoTmlbDnu4QgQeOAguaIkeS7rOWumuS5iSBOX2nvvJrku44gQVswXSDliLAgQVtpXSDnmoTnrKwgaSDkuKrlrZDmlbDnu4Tooqvop6Pph4rkuLrkuIDkuKrkuozov5vliLbmlbDvvIjku47mnIDpq5jmnInmlYjkvY3liLDmnIDkvY7mnInmlYjkvY3vvInjgIJcblxu6L+U5Zue5biD5bCU5YC85YiX6KGoIGFuc3dlcu+8jOWPquacieW9kyBOX2kg5Y+v5Lul6KKrIDUg5pW06Zmk5pe277yM562U5qGIIGFuc3dlcltpXSDkuLogdHJ1Ze+8jOWQpuWImeS4uiBmYWxzZeOAglxuXG5cblxu56S65L6LIDHvvJpcblxu6L6T5YWl77yaWzAsMSwxXVxu6L6T5Ye677yaW3RydWUsZmFsc2UsZmFsc2VdXG7op6Pph4rvvJpcbui+k+WFpeaVsOWtl+S4uiAwLCAwMSwgMDEx77yb5Lmf5bCx5piv5Y2B6L+b5Yi25Lit55qEIDAsIDEsIDMg44CC5Y+q5pyJ56ys5LiA5Liq5pWw5Y+v5Lul6KKrIDUg5pW06Zmk77yM5Zug5q2kIGFuc3dlclswXSDkuLrnnJ/jgIJcbuekuuS+iyAy77yaXG5cbui+k+WFpe+8mlsxLDEsMV1cbui+k+WHuu+8mltmYWxzZSxmYWxzZSxmYWxzZV1cbuekuuS+iyAz77yaXG5cbui+k+WFpe+8mlswLDEsMSwxLDEsMV1cbui+k+WHuu+8mlt0cnVlLGZhbHNlLGZhbHNlLGZhbHNlLHRydWUsZmFsc2VdXG7npLrkvosgNO+8mlxuXG7ovpPlhaXvvJpbMSwxLDEsMCwxXVxu6L6T5Ye677yaW2ZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlXVxuXG7mj5DnpLrvvJpcbjEgPD0gQS5sZW5ndGggPD0gMzAwMDBcbkFbaV0g5Li6IDAg5oiWIDFcbiogKi9cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBBXG4gKiBAcmV0dXJuIHtib29sZWFuW119XG4gKi9cbi8qKlxuICog5q2j56Gu55qE6Kej5rOVXG4gKiAqL1xuZnVuY3Rpb24gcHJlZml4ZXNEaXZCeTUyKEE6bnVtYmVyW10pIHtcbiAgICAvLyDmmoLlrZjkuIrkuIDmrKHnmoTnu5PmnpxcbiAgICBsZXQgbnVtID0gMDtcbiAgICByZXR1cm4gQS5tYXAodmFsID0+IHtcbiAgICAgICAgLy8g6KKr6Zmk5pWwICogMiDpmaTmlbDkuI3lj5gg55qE6K+dIOmCo+S5iOWOn+adpeWVhiAqIDIg5Y6f5p2l5L2Z5pWwICogMlxuICAgICAgICAvLyDkvYbmmK8g5ZWGIOWSjCDpmaTmlbAg5piv5LiN5b2x5ZONIOS9meaVsOeahCDmiYDku6Ug5Y+q6ZyA6KaB5L+d55WZIOS9meaVsCAqIDIg5Y2z5Y+vXG4gICAgICAgIG51bSA9ICgobnVtIDw8IDEpICsgdmFsKSAlIDU7XG4gICAgICAgIHJldHVybiBudW0gJSA1ID09PSAwO1xuICAgIH0pXG59XG5cblxudmFyIHByZWZpeGVzRGl2Qnk1ID0gZnVuY3Rpb24gKEE6bnVtYmVyW10pIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIHdoaWxlIChpbmRleCA8IEEubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGlzUHJlZml4ZXNEaXZCeTUoQS5zbGljZSgwLCBpbmRleCArIDEpKSk7XG4gICAgICAgIGluZGV4Kys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbn07XG5cbmNvbnN0IHJlbWFpbmRlcl9tYXAgPSBbNiwgMiwgNCwgOF07XG5cbi8vIOS6jOi/m+WItuaVsOWtlyDmjInnhafop4Tlvovlj43lpI3lh7rnjrBcbmZ1bmN0aW9uIGlzUHJlZml4ZXNEaXZCeTUoYXJyOm51bWJlcltdKSB7XG4gICAgY29uc3QgbGFzdCA9IGFyclthcnIubGVuZ3RoIC0gMV07XG5cbiAgICBhcnIucmV2ZXJzZSgpO1xuICAgIGNvbnN0IGFsbF9zaW5nbGUgPSBhcnIucmVkdWNlKChwcmUsIGN1ciwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGN1ciA9PT0gMCB8fCBpbmRleCA9PT0gMCkgcmV0dXJuIHByZTtcbiAgICAgICAgcmV0dXJuIHByZSArIHJlbWFpbmRlcl9tYXBbaW5kZXggJSA0XTtcbiAgICB9LCAwKTtcbiAgICByZXR1cm4gKGFsbF9zaW5nbGUgKyBsYXN0KSAlIDUgPT09IDA7XG59XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICBwcmVmaXhlc0RpdkJ5NShbMCwgMSwgMV0pLFxuICAgIFt0cnVlLCBmYWxzZSwgZmFsc2VdXG4pO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIHByZWZpeGVzRGl2Qnk1KFswLCAxLCAxLCAxLCAxLCAxXSksXG4gICAgW3RydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWUsIGZhbHNlXVxuKTtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICBwcmVmaXhlc0RpdkJ5NShbMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMV0pLFxuICAgIFtmYWxzZSwgZmFsc2UsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV1cbik7XG5cbiJdfQ==
