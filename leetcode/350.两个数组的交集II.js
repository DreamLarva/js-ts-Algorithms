"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定两个数组，编写一个函数来计算它们的交集。

示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
示例 2:

输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]
说明：

输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
我们可以不考虑输出结果的顺序。
进阶:

如果给定的数组已经排好序呢？你将如何优化你的算法？
如果 nums1 的大小比 nums2 小很多，哪种方法更优？
如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
* */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }
    const short = nums1, long = nums2;
    // 处理较短的数组 成为
    // [字符] : 出现几次
    const map = {};
    for (const char of short) {
        map[char] = map[char] ? map[char] + 1 : 1;
    }
    const result = [];
    for (const char of long) {
        if (map[char]) {
            result.push(char);
            map[char]--;
        }
    }
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(intersect([1, 2, 3, 4], [2, 3]), [2, 3]);
assert_1.default.deepStrictEqual(intersect([1, 2, 3, 4, 2], [2, 3, 2]), [2, 3, 2]);
assert_1.default.deepStrictEqual(intersect([1, 2, 2, 1], [2, 2]), [2, 2]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUwLuS4pOS4quaVsOe7hOeahOS6pOmbhklJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8zNTAu5Lik5Liq5pWw57uE55qE5Lqk6ZuGSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvQkk7QUFDSjs7OztHQUlHO0FBQ0gsSUFBSSxTQUFTLEdBQUcsVUFBVSxLQUFlLEVBQUUsS0FBZTtJQUN0RCxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUM3QixPQUFPLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDbEM7SUFFRCxNQUFNLEtBQUssR0FBRyxLQUFLLEVBQUUsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNsQyxhQUFhO0lBQ2IsY0FBYztJQUNkLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUM7SUFDMUMsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7UUFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdDO0lBRUQsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxFQUFFO1FBQ3JCLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUNmO0tBQ0o7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQy9CLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNULENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1osQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUMvQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4pOS4quaVsOe7hO+8jOe8luWGmeS4gOS4quWHveaVsOadpeiuoeeul+Wug+S7rOeahOS6pOmbhuOAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOiBudW1zMSA9IFsxLDIsMiwxXSwgbnVtczIgPSBbMiwyXVxu6L6T5Ye6OiBbMiwyXVxu56S65L6LIDI6XG5cbui+k+WFpTogbnVtczEgPSBbNCw5LDVdLCBudW1zMiA9IFs5LDQsOSw4LDRdXG7ovpPlh7o6IFs0LDldXG7or7TmmI7vvJpcblxu6L6T5Ye657uT5p6c5Lit5q+P5Liq5YWD57Sg5Ye6546w55qE5qyh5pWw77yM5bqU5LiO5YWD57Sg5Zyo5Lik5Liq5pWw57uE5Lit5Ye6546w55qE5qyh5pWw5LiA6Ie044CCXG7miJHku6zlj6/ku6XkuI3ogIPomZHovpPlh7rnu5PmnpznmoTpobrluo/jgIJcbui/m+mYtjpcblxu5aaC5p6c57uZ5a6a55qE5pWw57uE5bey57uP5o6S5aW95bqP5ZGi77yf5L2g5bCG5aaC5L2V5LyY5YyW5L2g55qE566X5rOV77yfXG7lpoLmnpwgbnVtczEg55qE5aSn5bCP5q+UIG51bXMyIOWwj+W+iOWkmu+8jOWTquenjeaWueazleabtOS8mO+8n1xu5aaC5p6cIG51bXMyIOeahOWFg+e0oOWtmOWCqOWcqOejgeebmOS4iu+8jOejgeebmOWGheWtmOaYr+aciemZkOeahO+8jOW5tuS4lOS9oOS4jeiDveS4gOasoeWKoOi9veaJgOacieeahOWFg+e0oOWIsOWGheWtmOS4re+8jOS9oOivpeaAjuS5iOWKnu+8n1xuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zMVxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtczJcbiAqIEByZXR1cm4ge251bWJlcltdfVxuICovXG52YXIgaW50ZXJzZWN0ID0gZnVuY3Rpb24gKG51bXMxOiBudW1iZXJbXSwgbnVtczI6IG51bWJlcltdKTogbnVtYmVyW10ge1xuICAgIGlmIChudW1zMS5sZW5ndGggPiBudW1zMi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGludGVyc2VjdChudW1zMiwgbnVtczEpO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3J0ID0gbnVtczEsIGxvbmcgPSBudW1zMjtcbiAgICAvLyDlpITnkIbovoPnn63nmoTmlbDnu4Qg5oiQ5Li6XG4gICAgLy8gW+Wtl+espl0gOiDlh7rnjrDlh6DmrKFcbiAgICBjb25zdCBtYXA6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH0gPSB7fTtcbiAgICBmb3IgKGNvbnN0IGNoYXIgb2Ygc2hvcnQpIHtcbiAgICAgICAgbWFwW2NoYXJdID0gbWFwW2NoYXJdID8gbWFwW2NoYXJdICsgMSA6IDE7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChjb25zdCBjaGFyIG9mIGxvbmcpIHtcbiAgICAgICAgaWYgKG1hcFtjaGFyXSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY2hhcik7XG4gICAgICAgICAgICBtYXBbY2hhcl0tLTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICBpbnRlcnNlY3QoWzEsIDIsIDMsIDRdLCBbMiwgM10pLFxuICAgIFsyLCAzXSxcbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIGludGVyc2VjdChbMSwgMiwgMywgNCwgMl0sIFsyLCAzLCAyXSksXG4gICAgWzIsIDMsIDJdLFxuKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgaW50ZXJzZWN0KFsxLCAyLCAyLCAxXSwgWzIsIDJdKSxcbiAgICBbMiwgMl0sXG4pO1xuIl19