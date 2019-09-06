"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个字符串，请将字符串里的字符按照出现的频率降序排列。

示例 1:

输入:
"tree"

输出:
"eert"

解释:
'e'出现两次，'r'和't'都只出现一次。
因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。
示例 2:

输入:
"cccaaa"

输出:
"cccaaa"

解释:
'c'和'a'都出现三次。此外，"aaaccc"也是有效的答案。
注意"cacaca"是不正确的，因为相同的字母必须放在一起。
示例 3:

输入:
"Aabb"

输出:
"bbAa"

解释:
此外，"bbaA"也是一个有效的答案，但"Aabb"是不正确的。
注意'A'和'a'被认为是两种不同的字符。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sort-characters-by-frequency
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
const lodash_1 = __importDefault(require("lodash"));
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    // 其实这就是 桶排序啦
    const map = {};
    for (const character of s) {
        if (map[character] == null) {
            map[character] = 1;
        }
        else {
            map[character]++;
        }
    }
    const sortedPairs = lodash_1.default.sortBy(lodash_1.default.toPairs(map), "[1]", "");
    return sortedPairs.reduceRight((pre, [character, count]) => {
        return pre + character.repeat(count);
    }, "");
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(frequencySort("tree"), "eert");
assert_1.default.strictEqual(frequencySort("aaaccc"), "cccaaa");
assert_1.default.strictEqual(frequencySort("Aabb"), "bbaA");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTEu5qC55o2u5a2X56ym5Ye6546w6aKR546H5o6S5bqPLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS81MS7moLnmja7lrZfnrKblh7rnjrDpopHnjofmjpLluo8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdDSTtBQUNKLG9EQUF1QjtBQUV2Qjs7O0dBR0c7QUFDSCxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQVM7SUFDbkMsYUFBYTtJQUNiLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUM7SUFFMUMsS0FBSyxNQUFNLFNBQVMsSUFBSSxDQUFDLEVBQUU7UUFDdkIsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3hCLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEI7YUFBTTtZQUNILEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1NBQ3BCO0tBQ0o7SUFDRCxNQUFNLFdBQVcsR0FBRyxnQkFBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkQsT0FBTyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7UUFDdkQsT0FBTyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUM7QUFHRixvREFBMkM7QUFFM0MsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUNyQixNQUFNLENBQ1QsQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFDdkIsUUFBUSxDQUNYLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQ3JCLE1BQU0sQ0FDVCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq5a2X56ym5Liy77yM6K+35bCG5a2X56ym5Liy6YeM55qE5a2X56ym5oyJ54Wn5Ye6546w55qE6aKR546H6ZmN5bqP5o6S5YiX44CCXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTpcclxuXCJ0cmVlXCJcclxuXHJcbui+k+WHujpcclxuXCJlZXJ0XCJcclxuXHJcbuino+mHijpcclxuJ2Un5Ye6546w5Lik5qyh77yMJ3In5ZKMJ3Qn6YO95Y+q5Ye6546w5LiA5qyh44CCXHJcbuWboOatpCdlJ+W/hemhu+WHuueOsOWcqCdyJ+WSjCd0J+S5i+WJjeOAguatpOWklu+8jFwiZWV0clwi5Lmf5piv5LiA5Liq5pyJ5pWI55qE562U5qGI44CCXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOlxyXG5cImNjY2FhYVwiXHJcblxyXG7ovpPlh7o6XHJcblwiY2NjYWFhXCJcclxuXHJcbuino+mHijpcclxuJ2Mn5ZKMJ2En6YO95Ye6546w5LiJ5qyh44CC5q2k5aSW77yMXCJhYWFjY2NcIuS5n+aYr+acieaViOeahOetlOahiOOAglxyXG7ms6jmhI9cImNhY2FjYVwi5piv5LiN5q2j56Gu55qE77yM5Zug5Li655u45ZCM55qE5a2X5q+N5b+F6aG75pS+5Zyo5LiA6LW344CCXHJcbuekuuS+iyAzOlxyXG5cclxu6L6T5YWlOlxyXG5cIkFhYmJcIlxyXG5cclxu6L6T5Ye6OlxyXG5cImJiQWFcIlxyXG5cclxu6Kej6YeKOlxyXG7mraTlpJbvvIxcImJiYUFcIuS5n+aYr+S4gOS4quacieaViOeahOetlOahiO+8jOS9hlwiQWFiYlwi5piv5LiN5q2j56Gu55qE44CCXHJcbuazqOaEjydBJ+WSjCdhJ+iiq+iupOS4uuaYr+S4pOenjeS4jeWQjOeahOWtl+espuOAglxyXG5cclxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcclxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvc29ydC1jaGFyYWN0ZXJzLWJ5LWZyZXF1ZW5jeVxyXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcclxuKiAqL1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd9IHNcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxudmFyIGZyZXF1ZW5jeVNvcnQgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XHJcbiAgICAvLyDlhbblrp7ov5nlsLHmmK8g5qG25o6S5bqP5ZWmXHJcbiAgICBjb25zdCBtYXA6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGNoYXJhY3RlciBvZiBzKSB7XHJcbiAgICAgICAgaWYgKG1hcFtjaGFyYWN0ZXJdID09IG51bGwpIHtcclxuICAgICAgICAgICAgbWFwW2NoYXJhY3Rlcl0gPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1hcFtjaGFyYWN0ZXJdKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc29ydGVkUGFpcnMgPSBfLnNvcnRCeShfLnRvUGFpcnMobWFwKSwgXCJbMV1cIixcIlwiKTtcclxuICAgIHJldHVybiBzb3J0ZWRQYWlycy5yZWR1Y2VSaWdodCgocHJlLCBbY2hhcmFjdGVyLCBjb3VudF0pID0+IHtcclxuICAgICAgICByZXR1cm4gcHJlICsgY2hhcmFjdGVyLnJlcGVhdChjb3VudCk7XHJcbiAgICB9LCBcIlwiKTtcclxufTtcclxuXHJcblxyXG5pbXBvcnQgYXNzZXJ0LCB7c3RyaWN0RXF1YWx9IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGZyZXF1ZW5jeVNvcnQoXCJ0cmVlXCIpLFxyXG4gICAgXCJlZXJ0XCJcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgZnJlcXVlbmN5U29ydChcImFhYWNjY1wiKSxcclxuICAgIFwiY2NjYWFhXCJcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgZnJlcXVlbmN5U29ydChcIkFhYmJcIiksXHJcbiAgICBcImJiYUFcIlxyXG4pO1xyXG4iXX0=