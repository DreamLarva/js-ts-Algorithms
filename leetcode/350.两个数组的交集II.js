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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUwLuS4pOS4quaVsOe7hOeahOS6pOmbhklJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8zNTAu5Lik5Liq5pWw57uE55qE5Lqk6ZuGSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvQkk7QUFDSjs7OztHQUlHO0FBQ0gsSUFBSSxTQUFTLEdBQUcsVUFBVSxLQUFlLEVBQUUsS0FBZTtJQUN0RCxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUM3QixPQUFPLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDbEM7SUFFRCxNQUFNLEtBQUssR0FBRyxLQUFLLEVBQUUsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNsQyxhQUFhO0lBQ2IsY0FBYztJQUNkLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUM7SUFDMUMsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7UUFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdDO0lBRUQsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxFQUFFO1FBQ3JCLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUNmO0tBQ0o7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQy9CLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNULENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1osQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUMvQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5Lik5Liq5pWw57uE77yM57yW5YaZ5LiA5Liq5Ye95pWw5p2l6K6h566X5a6D5Lus55qE5Lqk6ZuG44CCXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTogbnVtczEgPSBbMSwyLDIsMV0sIG51bXMyID0gWzIsMl1cclxu6L6T5Ye6OiBbMiwyXVxyXG7npLrkvosgMjpcclxuXHJcbui+k+WFpTogbnVtczEgPSBbNCw5LDVdLCBudW1zMiA9IFs5LDQsOSw4LDRdXHJcbui+k+WHujogWzQsOV1cclxu6K+05piO77yaXHJcblxyXG7ovpPlh7rnu5PmnpzkuK3mr4/kuKrlhYPntKDlh7rnjrDnmoTmrKHmlbDvvIzlupTkuI7lhYPntKDlnKjkuKTkuKrmlbDnu4TkuK3lh7rnjrDnmoTmrKHmlbDkuIDoh7TjgIJcclxu5oiR5Lus5Y+v5Lul5LiN6ICD6JmR6L6T5Ye657uT5p6c55qE6aG65bqP44CCXHJcbui/m+mYtjpcclxuXHJcbuWmguaenOe7meWumueahOaVsOe7hOW3sue7j+aOkuWlveW6j+WRou+8n+S9oOWwhuWmguS9leS8mOWMluS9oOeahOeul+azle+8n1xyXG7lpoLmnpwgbnVtczEg55qE5aSn5bCP5q+UIG51bXMyIOWwj+W+iOWkmu+8jOWTquenjeaWueazleabtOS8mO+8n1xyXG7lpoLmnpwgbnVtczIg55qE5YWD57Sg5a2Y5YKo5Zyo56OB55uY5LiK77yM56OB55uY5YaF5a2Y5piv5pyJ6ZmQ55qE77yM5bm25LiU5L2g5LiN6IO95LiA5qyh5Yqg6L295omA5pyJ55qE5YWD57Sg5Yiw5YaF5a2Y5Lit77yM5L2g6K+l5oCO5LmI5Yqe77yfXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXMxXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXMyXHJcbiAqIEByZXR1cm4ge251bWJlcltdfVxyXG4gKi9cclxudmFyIGludGVyc2VjdCA9IGZ1bmN0aW9uIChudW1zMTogbnVtYmVyW10sIG51bXMyOiBudW1iZXJbXSk6IG51bWJlcltdIHtcclxuICAgIGlmIChudW1zMS5sZW5ndGggPiBudW1zMi5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gaW50ZXJzZWN0KG51bXMyLCBudW1zMSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvcnQgPSBudW1zMSwgbG9uZyA9IG51bXMyO1xyXG4gICAgLy8g5aSE55CG6L6D55+t55qE5pWw57uEIOaIkOS4ulxyXG4gICAgLy8gW+Wtl+espl0gOiDlh7rnjrDlh6DmrKFcclxuICAgIGNvbnN0IG1hcDogeyBba2V5OiBudW1iZXJdOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgZm9yIChjb25zdCBjaGFyIG9mIHNob3J0KSB7XHJcbiAgICAgICAgbWFwW2NoYXJdID0gbWFwW2NoYXJdID8gbWFwW2NoYXJdICsgMSA6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGNoYXIgb2YgbG9uZykge1xyXG4gICAgICAgIGlmIChtYXBbY2hhcl0pIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY2hhcik7XHJcbiAgICAgICAgICAgIG1hcFtjaGFyXS0tO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgaW50ZXJzZWN0KFsxLCAyLCAzLCA0XSwgWzIsIDNdKSxcclxuICAgIFsyLCAzXSxcclxuKTtcclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgIGludGVyc2VjdChbMSwgMiwgMywgNCwgMl0sIFsyLCAzLCAyXSksXHJcbiAgICBbMiwgMywgMl0sXHJcbik7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBpbnRlcnNlY3QoWzEsIDIsIDIsIDFdLCBbMiwgMl0pLFxyXG4gICAgWzIsIDJdLFxyXG4pO1xyXG4iXX0=