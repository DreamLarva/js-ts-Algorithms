"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个排序好的数组，两个整数 k 和 x，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。如果有两个数与 x 的差值一样，优先选择数值较小的那个数。

示例 1:

输入: [1,2,3,4,5], k=4, x=3
输出: [1,2,3,4]


示例 2:

输入: [1,2,3,4,5], k=4, x=-1
输出: [1,2,3,4]


说明:

k 的值为正数，且总是小于给定排序数组的长度。
数组不为空，且长度不超过 104
数组里的每个元素与 x 的绝对值不超过 104


更新(2017/9/19):
这个参数 arr 已经被改变为一个整数数组（而不是整数列表）。 请重新加载代码定义以获取最新更改。

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
assert_1.default.deepStrictEqual(findClosestElements([1, 2, 3, 4, 5], 4, 3), [
  1,
  2,
  3,
  4,
]);
assert_1.default.deepStrictEqual(findClosestElements([1, 2, 3, 4, 5], 4, -1), [
  1,
  2,
  3,
  4,
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjU4LuaJvuWIsEvkuKrmnIDmjqXov5HnmoTlhYPntKAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzY1OC7mib7liLBL5Liq5pyA5o6l6L+R55qE5YWD57SgLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE0Qkk7QUFDSjs7Ozs7R0FLRztBQUNILElBQUksbUJBQW1CLEdBQUcsVUFBVSxHQUFhLEVBQUUsQ0FBUyxFQUFFLENBQVM7SUFDbkU7OztTQUdLO0lBQ0Qsc0RBQXNEO0lBQzFELElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLE9BQU8sSUFBSSxHQUFHLEtBQUssRUFBRTtRQUNqQixNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7UUFDdkQscUVBQXFFO1FBQ3JFLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsK0VBQStFO1lBQ3RJLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsMEJBQTBCO1NBQzdDO2FBQU07WUFDSCxLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQ2Y7S0FDSjtJQUVELE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUMxQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNmLENBQUM7QUFJRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQzNDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrmjpLluo/lpb3nmoTmlbDnu4TvvIzkuKTkuKrmlbTmlbAgayDlkowgeO+8jOS7juaVsOe7hOS4reaJvuWIsOacgOmdoOi/kSB477yI5Lik5pWw5LmL5beu5pyA5bCP77yJ55qEIGsg5Liq5pWw44CC6L+U5Zue55qE57uT5p6c5b+F6aG76KaB5piv5oyJ5Y2H5bqP5o6S5aW955qE44CC5aaC5p6c5pyJ5Lik5Liq5pWw5LiOIHgg55qE5beu5YC85LiA5qC377yM5LyY5YWI6YCJ5oup5pWw5YC86L6D5bCP55qE6YKj5Liq5pWw44CCXG5cbuekuuS+i8KgMTpcblxu6L6T5YWlOiBbMSwyLDMsNCw1XSwgaz00LCB4PTNcbui+k+WHujogWzEsMiwzLDRdXG7CoFxuXG7npLrkvosgMjpcblxu6L6T5YWlOiBbMSwyLDMsNCw1XSwgaz00LCB4PS0xXG7ovpPlh7o6IFsxLDIsMyw0XVxuwqBcblxu6K+05piOOlxuXG5rIOeahOWAvOS4uuato+aVsO+8jOS4lOaAu+aYr+Wwj+S6jue7meWumuaOkuW6j+aVsOe7hOeahOmVv+W6puOAglxu5pWw57uE5LiN5Li656m677yM5LiU6ZW/5bqm5LiN6LaF6L+HIDEwNFxu5pWw57uE6YeM55qE5q+P5Liq5YWD57Sg5LiOwqB4IOeahOe7neWvueWAvOS4jei2hei/hyAxMDRcbsKgXG5cbuabtOaWsCgyMDE3LzkvMTkpOlxu6L+Z5Liq5Y+C5pWwIGFyciDlt7Lnu4/ooqvmlLnlj5jkuLrkuIDkuKrmlbTmlbDmlbDnu4TvvIjogIzkuI3mmK/mlbTmlbDliJfooajvvInjgILCoOivt+mHjeaWsOWKoOi9veS7o+eggeWumuS5ieS7peiOt+WPluacgOaWsOabtOaUueOAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvZmluZC1rLWNsb3Nlc3QtZWxlbWVudHNcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBhcnJcbiAqIEBwYXJhbSB7bnVtYmVyfSBrXG4gKiBAcGFyYW0ge251bWJlcn0geFxuICogQHJldHVybiB7bnVtYmVyW119XG4gKi9cbnZhciBmaW5kQ2xvc2VzdEVsZW1lbnRzID0gZnVuY3Rpb24gKGFycjogbnVtYmVyW10sIGs6IG51bWJlciwgeDogbnVtYmVyKSB7XG4gICAgLyoqXG4gICAgICog5ZCM5qC35L2/55So5LqM5YiG5rOVXG4gICAgICog5bCGIOS4gOS4qiBrIOWMuumXtOWGheWuuSDnmoTmnIDlt6bovrnnmoRpbmRleCDkvZzkuLog5L6d5o2uIOS4gOS4quWMuumXtOWGheaJgOacieeahOWAvCDkvZzkuLrluqbph49cbiAgICAgKiAqL1xuICAgICAgICAvLyDmgLvlhbEgSyDkuKrlgLwg6YKj5LmI5aaC5p6cIOWvu+aJvuacgOW3pui+ueeVjCBpbmRleCDnmoQg6IyD5Zu05bCx5pivIDAgfiBhcnIubGVuZ3RoIC0ga1xuICAgIGxldCBsZWZ0ID0gMDtcbiAgICBsZXQgcmlnaHQgPSBhcnIubGVuZ3RoIC0gaztcbiAgICB3aGlsZSAobGVmdCA8IHJpZ2h0KSB7XG4gICAgICAgIGNvbnN0IG1pZCA9IChsZWZ0ICsgcmlnaHQpID4+IDE7IC8vIOS8mOWFiOS9v+eUqOi+g+Wwj+eahCDmiYDku6Xkvb/nlKjlkJHkuIvlj5bmlbTnmoTmqKHmnb9cbiAgICAgICAgLy8gICAgICAgICAgICAgaW5kZXggbWlkIOS9nOS4uuW3pui+ueeVjCAgICAgICAgICAgbWlkICsgayAtIDHkuLrlj7PovrnnlYwg6L+Z6YeMIOeciyBtaWQgKyBrXG4gICAgICAgIGlmIChNYXRoLmFicyhhcnJbbWlkXSAtIHgpID4gTWF0aC5hYnMoYXJyW21pZCArIGtdIC0geCkpIHsgLy8g5Li65LuA5LmIIG1pZCArIGvkuI3kvJrotornlYzlkaIg5Zug5Li6IGxlZnQgPCByaWdodCDnhLbogIzlj6rmnIkgbGVmdCA9IHJpZ2h0ID0gYXJyLmxlbmd0aCAtIGsg55qE5pe2IOaJjeWPr+iDvei2iueVjFxuICAgICAgICAgICAgbGVmdCA9IG1pZCArIDE7IC8vIOWcqCBtaWQg5Li65bem6L6555WMIOeahOW6j+WIl+eahCDlj7PovrnnlYznmoQg5Y+z6L65XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByaWdodCA9IG1pZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcnIuc2xpY2UocmlnaHQsIHJpZ2h0ICsgayk7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICBmaW5kQ2xvc2VzdEVsZW1lbnRzKFsxLCAyLCAzLCA0LCA1XSwgNCwgMyksXG4gICAgWzEsIDIsIDMsIDRdLFxuKTtcblxuXG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgZmluZENsb3Nlc3RFbGVtZW50cyhbMSwgMiwgMywgNCwgNV0sIDQsIC0xKSxcbiAgICBbMSwgMiwgMywgNF0sXG4pO1xuXG5cbiJdfQ==
