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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQ0LuWPjei9rOWtl+espuS4si5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzQ0LuWPjei9rOWtl+espuS4si50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztJQWlCSTtBQUNKOzs7R0FHRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBVztJQUN2QyxPQUFPO0lBQ1AsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDeEIsT0FBTyxJQUFJLEdBQUcsSUFBSSxFQUFFO1FBQ2xCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksRUFBRSxDQUFDO1FBQ1AsSUFBSSxFQUFFLENBQUM7S0FDUjtBQUNILENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDL0IsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQy9CLGdCQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nvJblhpnkuIDkuKrlh73mlbDvvIzlhbbkvZznlKjmmK/lsIbovpPlhaXnmoTlrZfnrKbkuLLlj43ovazov4fmnaXjgILovpPlhaXlrZfnrKbkuLLku6XlrZfnrKbmlbDnu4QgY2hhcltdIOeahOW9ouW8j+e7meWHuuOAglxuXG7kuI3opoHnu5nlj6blpJbnmoTmlbDnu4TliIbphY3pop3lpJbnmoTnqbrpl7TvvIzkvaDlv4Xpobvljp/lnLDkv67mlLnovpPlhaXmlbDnu4TjgIHkvb/nlKggTygxKSDnmoTpop3lpJbnqbrpl7Top6PlhrPov5nkuIDpl67popjjgIJcblxu5L2g5Y+v5Lul5YGH6K6+5pWw57uE5Lit55qE5omA5pyJ5a2X56ym6YO95pivIEFTQ0lJIOeggeihqOS4reeahOWPr+aJk+WNsOWtl+espuOAglxuXG5cblxu56S65L6LIDHvvJpcblxu6L6T5YWl77yaW1wiaFwiLFwiZVwiLFwibFwiLFwibFwiLFwib1wiXVxu6L6T5Ye677yaW1wib1wiLFwibFwiLFwibFwiLFwiZVwiLFwiaFwiXVxu56S65L6LIDLvvJpcblxu6L6T5YWl77yaW1wiSFwiLFwiYVwiLFwiblwiLFwiblwiLFwiYVwiLFwiaFwiXVxu6L6T5Ye677yaW1wiaFwiLFwiYVwiLFwiblwiLFwiblwiLFwiYVwiLFwiSFwiXVxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBzXG4gKiBAcmV0dXJuIHt2b2lkfSBEbyBub3QgcmV0dXJuIGFueXRoaW5nLCBtb2RpZnkgcyBpbi1wbGFjZSBpbnN0ZWFkLlxuICovXG52YXIgcmV2ZXJzZVN0cmluZyA9IGZ1bmN0aW9uIChzOiBzdHJpbmdbXSkge1xuICAvLyDpppblsL7mjIfpkohcbiAgbGV0IGhlYWQgPSAwO1xuICBsZXQgdGFpbCA9IHMubGVuZ3RoIC0gMTtcbiAgd2hpbGUgKGhlYWQgPCB0YWlsKSB7XG4gICAgW3NbaGVhZF0sIHNbdGFpbF1dID0gW3NbdGFpbF0sIHNbaGVhZF1dO1xuICAgIGhlYWQrKztcbiAgICB0YWlsLS07XG4gIH1cbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5jb25zdCBzYW1wbGUgPSBbXCIxXCIsIFwiMlwiLCBcIjNcIl07XG5yZXZlcnNlU3RyaW5nKFtcIjFcIiwgXCIyXCIsIFwiM1wiXSk7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKHNhbXBsZSwgc2FtcGxlLnJldmVyc2UoKSk7XG4iXX0=