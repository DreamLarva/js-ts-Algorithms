"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。



示例 1：

输入：["h","e","l","l","o"]
输出：["o","l","l","e","h"]
示例 2：

输入：["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]
* */
/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // 首尾指针
  let head = 0;
  let tail = s.length - 1;
  while (head < tail) {
    [s[head], s[tail]] = [s[tail], s[head]];
    head++;
    tail--;
  }
};
const assert_1 = __importDefault(require("assert"));
const sample = ["1", "2", "3"];
reverseString(["1", "2", "3"]);
assert_1.default.deepStrictEqual(sample, sample.reverse());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQ0LuWPjei9rOWtl+espuS4si5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzQ0LuWPjei9rOWtl+espuS4si50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztJQWlCSTtBQUNKOzs7R0FHRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBVztJQUNyQyxPQUFPO0lBQ1AsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDeEIsT0FBTyxJQUFJLEdBQUcsSUFBSSxFQUFFO1FBQ2hCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksRUFBRSxDQUFDO1FBQ1AsSUFBSSxFQUFFLENBQUM7S0FDVjtBQUNMLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDL0IsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQy9CLGdCQUFNLENBQUMsZUFBZSxDQUNsQixNQUFNLEVBQ04sTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57yW5YaZ5LiA5Liq5Ye95pWw77yM5YW25L2c55So5piv5bCG6L6T5YWl55qE5a2X56ym5Liy5Y+N6L2s6L+H5p2l44CC6L6T5YWl5a2X56ym5Liy5Lul5a2X56ym5pWw57uEIGNoYXJbXSDnmoTlvaLlvI/nu5nlh7rjgIJcclxuXHJcbuS4jeimgee7meWPpuWklueahOaVsOe7hOWIhumFjemineWklueahOepuumXtO+8jOS9oOW/hemhu+WOn+WcsOS/ruaUuei+k+WFpeaVsOe7hOOAgeS9v+eUqCBPKDEpIOeahOmineWkluepuumXtOino+WGs+i/meS4gOmXrumimOOAglxyXG5cclxu5L2g5Y+v5Lul5YGH6K6+5pWw57uE5Lit55qE5omA5pyJ5a2X56ym6YO95pivIEFTQ0lJIOeggeihqOS4reeahOWPr+aJk+WNsOWtl+espuOAglxyXG5cclxuXHJcblxyXG7npLrkvosgMe+8mlxyXG5cclxu6L6T5YWl77yaW1wiaFwiLFwiZVwiLFwibFwiLFwibFwiLFwib1wiXVxyXG7ovpPlh7rvvJpbXCJvXCIsXCJsXCIsXCJsXCIsXCJlXCIsXCJoXCJdXHJcbuekuuS+iyAy77yaXHJcblxyXG7ovpPlhaXvvJpbXCJIXCIsXCJhXCIsXCJuXCIsXCJuXCIsXCJhXCIsXCJoXCJdXHJcbui+k+WHuu+8mltcImhcIixcImFcIixcIm5cIixcIm5cIixcImFcIixcIkhcIl1cclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmdbXX0gc1xyXG4gKiBAcmV0dXJuIHt2b2lkfSBEbyBub3QgcmV0dXJuIGFueXRoaW5nLCBtb2RpZnkgcyBpbi1wbGFjZSBpbnN0ZWFkLlxyXG4gKi9cclxudmFyIHJldmVyc2VTdHJpbmcgPSBmdW5jdGlvbiAoczogc3RyaW5nW10pIHtcclxuICAgIC8vIOmmluWwvuaMh+mSiFxyXG4gICAgbGV0IGhlYWQgPSAwO1xyXG4gICAgbGV0IHRhaWwgPSBzLmxlbmd0aCAtIDE7XHJcbiAgICB3aGlsZSAoaGVhZCA8IHRhaWwpIHtcclxuICAgICAgICBbc1toZWFkXSxzW3RhaWxdXSA9IFtzW3RhaWxdLHNbaGVhZF1dO1xyXG4gICAgICAgIGhlYWQrKztcclxuICAgICAgICB0YWlsLS07XHJcbiAgICB9XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmNvbnN0IHNhbXBsZSA9IFtcIjFcIiwgXCIyXCIsIFwiM1wiXTtcclxucmV2ZXJzZVN0cmluZyhbXCIxXCIsIFwiMlwiLCBcIjNcIl0pO1xyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgc2FtcGxlLFxyXG4gICAgc2FtcGxlLnJldmVyc2UoKSxcclxuKTtcclxuIl19
