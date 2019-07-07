"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (28.89%)
 * Total Accepted:    19.5K
 * Total Submissions: 67.6K
 * Testcase Example:  '"Hello World"'
 *
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 *
 * 如果不存在最后一个单词，请返回 0 。
 *
 * 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 *
 * 示例:
 *
 * 输入: "Hello World"
 * 输出: 5
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.trim();
    const lastSpaceIndex = s.lastIndexOf(" ");
    return lastSpaceIndex === -1 ?
        s.length :
        s.length - lastSpaceIndex - 1;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTgu5pyA5ZCO5LiA5Liq5Y2V6K+N55qE6ZW/5bqmLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS81OC7mnIDlkI7kuIDkuKrljZXor43nmoTplb/luqYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRztBQUNIOzs7R0FHRztBQUNILElBQUksZ0JBQWdCLEdBQUcsVUFBVSxDQUFTO0lBQ3RDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLE9BQU8sY0FBYyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxDQUFDLE1BQU0sR0FBRyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBRXRDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBsYyBhcHA9bGVldGNvZGUuY24gaWQ9NTggbGFuZz1qYXZhc2NyaXB0XHJcbiAqXHJcbiAqIFs1OF0g5pyA5ZCO5LiA5Liq5Y2V6K+N55qE6ZW/5bqmXHJcbiAqXHJcbiAqIGh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2xlbmd0aC1vZi1sYXN0LXdvcmQvZGVzY3JpcHRpb24vXHJcbiAqXHJcbiAqIGFsZ29yaXRobXNcclxuICogRWFzeSAoMjguODklKVxyXG4gKiBUb3RhbCBBY2NlcHRlZDogICAgMTkuNUtcclxuICogVG90YWwgU3VibWlzc2lvbnM6IDY3LjZLXHJcbiAqIFRlc3RjYXNlIEV4YW1wbGU6ICAnXCJIZWxsbyBXb3JsZFwiJ1xyXG4gKlxyXG4gKiDnu5nlrprkuIDkuKrku4XljIXlkKvlpKflsI/lhpnlrZfmr43lkoznqbrmoLzCoCcgJ8Kg55qE5a2X56ym5Liy77yM6L+U5Zue5YW25pyA5ZCO5LiA5Liq5Y2V6K+N55qE6ZW/5bqm44CCXHJcbiAqXHJcbiAqIOWmguaenOS4jeWtmOWcqOacgOWQjuS4gOS4quWNleivje+8jOivt+i/lOWbniAwwqDjgIJcclxuICpcclxuICog6K+05piO77ya5LiA5Liq5Y2V6K+N5piv5oyH55Sx5a2X5q+N57uE5oiQ77yM5L2G5LiN5YyF5ZCr5Lu75L2V56m65qC855qE5a2X56ym5Liy44CCXHJcbiAqXHJcbiAqIOekuuS+izpcclxuICpcclxuICog6L6T5YWlOiBcIkhlbGxvIFdvcmxkXCJcclxuICog6L6T5Ye6OiA1XHJcbiAqXHJcbiAqXHJcbiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd9IHNcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIGxlbmd0aE9mTGFzdFdvcmQgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XHJcbiAgICBzID0gcy50cmltKCk7XHJcbiAgICBjb25zdCBsYXN0U3BhY2VJbmRleCA9IHMubGFzdEluZGV4T2YoXCIgXCIpO1xyXG4gICAgcmV0dXJuIGxhc3RTcGFjZUluZGV4ID09PSAtMSA/XHJcbiAgICAgICAgcy5sZW5ndGggOlxyXG4gICAgICAgIHMubGVuZ3RoIC0gbGFzdFNwYWNlSW5kZXggLSAxO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCB7fVxyXG4iXX0=