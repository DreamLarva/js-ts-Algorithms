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
    return lastSpaceIndex === -1 ? s.length : s.length - lastSpaceIndex - 1;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTgu5pyA5ZCO5LiA5Liq5Y2V6K+N55qE6ZW/5bqmLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS81OC7mnIDlkI7kuIDkuKrljZXor43nmoTplb/luqYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRztBQUNIOzs7R0FHRztBQUNILElBQUksZ0JBQWdCLEdBQUcsVUFBVSxDQUFTO0lBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLE9BQU8sY0FBYyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFDMUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBsYyBhcHA9bGVldGNvZGUuY24gaWQ9NTggbGFuZz1qYXZhc2NyaXB0XG4gKlxuICogWzU4XSDmnIDlkI7kuIDkuKrljZXor43nmoTplb/luqZcbiAqXG4gKiBodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9sZW5ndGgtb2YtbGFzdC13b3JkL2Rlc2NyaXB0aW9uL1xuICpcbiAqIGFsZ29yaXRobXNcbiAqIEVhc3kgKDI4Ljg5JSlcbiAqIFRvdGFsIEFjY2VwdGVkOiAgICAxOS41S1xuICogVG90YWwgU3VibWlzc2lvbnM6IDY3LjZLXG4gKiBUZXN0Y2FzZSBFeGFtcGxlOiAgJ1wiSGVsbG8gV29ybGRcIidcbiAqXG4gKiDnu5nlrprkuIDkuKrku4XljIXlkKvlpKflsI/lhpnlrZfmr43lkoznqbrmoLzCoCcgJ8Kg55qE5a2X56ym5Liy77yM6L+U5Zue5YW25pyA5ZCO5LiA5Liq5Y2V6K+N55qE6ZW/5bqm44CCXG4gKlxuICog5aaC5p6c5LiN5a2Y5Zyo5pyA5ZCO5LiA5Liq5Y2V6K+N77yM6K+36L+U5ZueIDDCoOOAglxuICpcbiAqIOivtOaYju+8muS4gOS4quWNleivjeaYr+aMh+eUseWtl+avjee7hOaIkO+8jOS9huS4jeWMheWQq+S7u+S9leepuuagvOeahOWtl+espuS4suOAglxuICpcbiAqIOekuuS+izpcbiAqXG4gKiDovpPlhaU6IFwiSGVsbG8gV29ybGRcIlxuICog6L6T5Ye6OiA1XG4gKlxuICpcbiAqL1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgbGVuZ3RoT2ZMYXN0V29yZCA9IGZ1bmN0aW9uIChzOiBzdHJpbmcpIHtcbiAgcyA9IHMudHJpbSgpO1xuICBjb25zdCBsYXN0U3BhY2VJbmRleCA9IHMubGFzdEluZGV4T2YoXCIgXCIpO1xuICByZXR1cm4gbGFzdFNwYWNlSW5kZXggPT09IC0xID8gcy5sZW5ndGggOiBzLmxlbmd0aCAtIGxhc3RTcGFjZUluZGV4IC0gMTtcbn07XG5cbmV4cG9ydCB7fTtcbiJdfQ==