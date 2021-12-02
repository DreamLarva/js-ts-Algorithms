"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个排序好的数组，两个整数 k 和 x，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。如果有两个数与 x 的差值一样，优先选择数值较小的那个数。

示例 1:

输入: [1,2,3,4,5], k=4, x=3
输出: [1,2,3,4]


示例 2:

输入: [1,2,3,4,5], k=4, x=-1
输出: [1,2,3,4]


说明:

k 的值为正数，且总是小于给定排序数组的长度。
数组不为空，且长度不超过 104
数组里的每个元素与 x 的绝对值不超过 104


更新(2017/9/19):
这个参数 arr 已经被改变为一个整数数组（而不是整数列表）。 请重新加载代码定义以获取最新更改。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-k-closest-elements
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  /**
   * 同样使用二分法
   * 将 一个 k 区间内容 的最左边的index 作为 依据 一个区间内所有的值 作为度量
   * */
  // 总共 K 个值 那么如果 寻找最左边界 index 的 范围就是 0 ~ arr.length - k
  let left = 0;
  let right = arr.length - k;
  while (left < right) {
    const mid = (left + right) >> 1; // 优先使用较小的 所以使用向下取整的模板
    //             index mid 作为左边界           mid + k - 1为右边界 这里 看 mid + k
    if (Math.abs(arr[mid] - x) > Math.abs(arr[mid + k] - x)) {
      // 为什么 mid + k不会越界呢 因为 left < right 然而只有 left = right = arr.length - k 的时 才可能越界
      left = mid + 1; // 在 mid 为左边界 的序列的 右边界的 右边
    } else {
      right = mid;
    }
  }
  return arr.slice(right, right + k);
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(
  findClosestElements([1, 2, 3, 4, 5], 4, 3),
  [1, 2, 3, 4]
);
assert_1.default.deepStrictEqual(
  findClosestElements([1, 2, 3, 4, 5], 4, -1),
  [1, 2, 3, 4]
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjU4LuaJvuWIsEvkuKrmnIDmjqXov5HnmoTlhYPntKAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzY1OC7mib7liLBL5Liq5pyA5o6l6L+R55qE5YWD57SgLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE0Qkk7QUFDSjs7Ozs7R0FLRztBQUNILElBQUksbUJBQW1CLEdBQUcsVUFBVSxHQUFhLEVBQUUsQ0FBUyxFQUFFLENBQVM7SUFDckU7OztTQUdLO0lBQ0wsc0RBQXNEO0lBQ3RELElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLE9BQU8sSUFBSSxHQUFHLEtBQUssRUFBRTtRQUNuQixNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7UUFDdkQscUVBQXFFO1FBQ3JFLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3ZELCtFQUErRTtZQUMvRSxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLDBCQUEwQjtTQUMzQzthQUFNO1lBQ0wsS0FBSyxHQUFHLEdBQUcsQ0FBQztTQUNiO0tBQ0Y7SUFFRCxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0lBQ2pFLENBQUM7SUFDRCxDQUFDO0lBQ0QsQ0FBQztJQUNELENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNsRSxDQUFDO0lBQ0QsQ0FBQztJQUNELENBQUM7SUFDRCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quaOkuW6j+WlveeahOaVsOe7hO+8jOS4pOS4quaVtOaVsCBrIOWSjCB477yM5LuO5pWw57uE5Lit5om+5Yiw5pyA6Z2g6L+RIHjvvIjkuKTmlbDkuYvlt67mnIDlsI/vvInnmoQgayDkuKrmlbDjgILov5Tlm57nmoTnu5Pmnpzlv4XpobvopoHmmK/mjInljYfluo/mjpLlpb3nmoTjgILlpoLmnpzmnInkuKTkuKrmlbDkuI4geCDnmoTlt67lgLzkuIDmoLfvvIzkvJjlhYjpgInmi6nmlbDlgLzovoPlsI/nmoTpgqPkuKrmlbDjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogWzEsMiwzLDQsNV0sIGs9NCwgeD0zXG7ovpPlh7o6IFsxLDIsMyw0XVxuXG5cbuekuuS+iyAyOlxuXG7ovpPlhaU6IFsxLDIsMyw0LDVdLCBrPTQsIHg9LTFcbui+k+WHujogWzEsMiwzLDRdXG5cblxu6K+05piOOlxuXG5rIOeahOWAvOS4uuato+aVsO+8jOS4lOaAu+aYr+Wwj+S6jue7meWumuaOkuW6j+aVsOe7hOeahOmVv+W6puOAglxu5pWw57uE5LiN5Li656m677yM5LiU6ZW/5bqm5LiN6LaF6L+HIDEwNFxu5pWw57uE6YeM55qE5q+P5Liq5YWD57Sg5LiOIHgg55qE57ud5a+55YC85LiN6LaF6L+HIDEwNFxuXG5cbuabtOaWsCgyMDE3LzkvMTkpOlxu6L+Z5Liq5Y+C5pWwIGFyciDlt7Lnu4/ooqvmlLnlj5jkuLrkuIDkuKrmlbTmlbDmlbDnu4TvvIjogIzkuI3mmK/mlbTmlbDliJfooajvvInjgIIg6K+36YeN5paw5Yqg6L295Luj56CB5a6a5LmJ5Lul6I635Y+W5pyA5paw5pu05pS544CCXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9maW5kLWstY2xvc2VzdC1lbGVtZW50c1xu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IGFyclxuICogQHBhcmFtIHtudW1iZXJ9IGtcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gKiBAcmV0dXJuIHtudW1iZXJbXX1cbiAqL1xudmFyIGZpbmRDbG9zZXN0RWxlbWVudHMgPSBmdW5jdGlvbiAoYXJyOiBudW1iZXJbXSwgazogbnVtYmVyLCB4OiBudW1iZXIpIHtcbiAgLyoqXG4gICAqIOWQjOagt+S9v+eUqOS6jOWIhuazlVxuICAgKiDlsIYg5LiA5LiqIGsg5Yy66Ze05YaF5a65IOeahOacgOW3pui+ueeahGluZGV4IOS9nOS4uiDkvp3mja4g5LiA5Liq5Yy66Ze05YaF5omA5pyJ55qE5YC8IOS9nOS4uuW6pumHj1xuICAgKiAqL1xuICAvLyDmgLvlhbEgSyDkuKrlgLwg6YKj5LmI5aaC5p6cIOWvu+aJvuacgOW3pui+ueeVjCBpbmRleCDnmoQg6IyD5Zu05bCx5pivIDAgfiBhcnIubGVuZ3RoIC0ga1xuICBsZXQgbGVmdCA9IDA7XG4gIGxldCByaWdodCA9IGFyci5sZW5ndGggLSBrO1xuICB3aGlsZSAobGVmdCA8IHJpZ2h0KSB7XG4gICAgY29uc3QgbWlkID0gKGxlZnQgKyByaWdodCkgPj4gMTsgLy8g5LyY5YWI5L2/55So6L6D5bCP55qEIOaJgOS7peS9v+eUqOWQkeS4i+WPluaVtOeahOaooeadv1xuICAgIC8vICAgICAgICAgICAgIGluZGV4IG1pZCDkvZzkuLrlt6bovrnnlYwgICAgICAgICAgIG1pZCArIGsgLSAx5Li65Y+z6L6555WMIOi/memHjCDnnIsgbWlkICsga1xuICAgIGlmIChNYXRoLmFicyhhcnJbbWlkXSAtIHgpID4gTWF0aC5hYnMoYXJyW21pZCArIGtdIC0geCkpIHtcbiAgICAgIC8vIOS4uuS7gOS5iCBtaWQgKyBr5LiN5Lya6LaK55WM5ZGiIOWboOS4uiBsZWZ0IDwgcmlnaHQg54S26ICM5Y+q5pyJIGxlZnQgPSByaWdodCA9IGFyci5sZW5ndGggLSBrIOeahOaXtiDmiY3lj6/og73otornlYxcbiAgICAgIGxlZnQgPSBtaWQgKyAxOyAvLyDlnKggbWlkIOS4uuW3pui+ueeVjCDnmoTluo/liJfnmoQg5Y+z6L6555WM55qEIOWPs+i+uVxuICAgIH0gZWxzZSB7XG4gICAgICByaWdodCA9IG1pZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJyLnNsaWNlKHJpZ2h0LCByaWdodCArIGspO1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZmluZENsb3Nlc3RFbGVtZW50cyhbMSwgMiwgMywgNCwgNV0sIDQsIDMpLCBbXG4gIDEsXG4gIDIsXG4gIDMsXG4gIDQsXG5dKTtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmaW5kQ2xvc2VzdEVsZW1lbnRzKFsxLCAyLCAzLCA0LCA1XSwgNCwgLTEpLCBbXG4gIDEsXG4gIDIsXG4gIDMsXG4gIDQsXG5dKTtcbiJdfQ==
