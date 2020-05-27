"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQ0LuWPjei9rOWtl+espuS4si5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzQ0LuWPjei9rOWtl+espuS4si50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztJQWlCSTtBQUNKOzs7R0FHRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBVztJQUN2QyxPQUFPO0lBQ1AsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDeEIsT0FBTyxJQUFJLEdBQUcsSUFBSSxFQUFFO1FBQ2xCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksRUFBRSxDQUFDO1FBQ1AsSUFBSSxFQUFFLENBQUM7S0FDUjtBQUNILENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDL0IsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQy9CLGdCQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue8luWGmeS4gOS4quWHveaVsO+8jOWFtuS9nOeUqOaYr+Wwhui+k+WFpeeahOWtl+espuS4suWPjei9rOi/h+adpeOAgui+k+WFpeWtl+espuS4suS7peWtl+espuaVsOe7hCBjaGFyW10g55qE5b2i5byP57uZ5Ye644CCXHJcblxyXG7kuI3opoHnu5nlj6blpJbnmoTmlbDnu4TliIbphY3pop3lpJbnmoTnqbrpl7TvvIzkvaDlv4Xpobvljp/lnLDkv67mlLnovpPlhaXmlbDnu4TjgIHkvb/nlKggTygxKSDnmoTpop3lpJbnqbrpl7Top6PlhrPov5nkuIDpl67popjjgIJcclxuXHJcbuS9oOWPr+S7peWBh+iuvuaVsOe7hOS4reeahOaJgOacieWtl+espumDveaYryBBU0NJSSDnoIHooajkuK3nmoTlj6/miZPljbDlrZfnrKbjgIJcclxuXHJcblxyXG5cclxu56S65L6LIDHvvJpcclxuXHJcbui+k+WFpe+8mltcImhcIixcImVcIixcImxcIixcImxcIixcIm9cIl1cclxu6L6T5Ye677yaW1wib1wiLFwibFwiLFwibFwiLFwiZVwiLFwiaFwiXVxyXG7npLrkvosgMu+8mlxyXG5cclxu6L6T5YWl77yaW1wiSFwiLFwiYVwiLFwiblwiLFwiblwiLFwiYVwiLFwiaFwiXVxyXG7ovpPlh7rvvJpbXCJoXCIsXCJhXCIsXCJuXCIsXCJuXCIsXCJhXCIsXCJIXCJdXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nW119IHNcclxuICogQHJldHVybiB7dm9pZH0gRG8gbm90IHJldHVybiBhbnl0aGluZywgbW9kaWZ5IHMgaW4tcGxhY2UgaW5zdGVhZC5cclxuICovXHJcbnZhciByZXZlcnNlU3RyaW5nID0gZnVuY3Rpb24gKHM6IHN0cmluZ1tdKSB7XHJcbiAgLy8g6aaW5bC+5oyH6ZKIXHJcbiAgbGV0IGhlYWQgPSAwO1xyXG4gIGxldCB0YWlsID0gcy5sZW5ndGggLSAxO1xyXG4gIHdoaWxlIChoZWFkIDwgdGFpbCkge1xyXG4gICAgW3NbaGVhZF0sIHNbdGFpbF1dID0gW3NbdGFpbF0sIHNbaGVhZF1dO1xyXG4gICAgaGVhZCsrO1xyXG4gICAgdGFpbC0tO1xyXG4gIH1cclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuY29uc3Qgc2FtcGxlID0gW1wiMVwiLCBcIjJcIiwgXCIzXCJdO1xyXG5yZXZlcnNlU3RyaW5nKFtcIjFcIiwgXCIyXCIsIFwiM1wiXSk7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoc2FtcGxlLCBzYW1wbGUucmV2ZXJzZSgpKTtcclxuIl19