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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTgu5pyA5ZCO5LiA5Liq5Y2V6K+N55qE6ZW/5bqmLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS81OC7mnIDlkI7kuIDkuKrljZXor43nmoTplb/luqYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRztBQUNIOzs7R0FHRztBQUNILElBQUksZ0JBQWdCLEdBQUcsVUFBVSxDQUFTO0lBQ3RDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLE9BQU8sY0FBYyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxDQUFDLE1BQU0sR0FBRyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBRXRDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGMgYXBwPWxlZXRjb2RlLmNuIGlkPTU4IGxhbmc9amF2YXNjcmlwdFxuICpcbiAqIFs1OF0g5pyA5ZCO5LiA5Liq5Y2V6K+N55qE6ZW/5bqmXG4gKlxuICogaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvbGVuZ3RoLW9mLWxhc3Qtd29yZC9kZXNjcmlwdGlvbi9cbiAqXG4gKiBhbGdvcml0aG1zXG4gKiBFYXN5ICgyOC44OSUpXG4gKiBUb3RhbCBBY2NlcHRlZDogICAgMTkuNUtcbiAqIFRvdGFsIFN1Ym1pc3Npb25zOiA2Ny42S1xuICogVGVzdGNhc2UgRXhhbXBsZTogICdcIkhlbGxvIFdvcmxkXCInXG4gKlxuICog57uZ5a6a5LiA5Liq5LuF5YyF5ZCr5aSn5bCP5YaZ5a2X5q+N5ZKM56m65qC8wqAnICfCoOeahOWtl+espuS4su+8jOi/lOWbnuWFtuacgOWQjuS4gOS4quWNleivjeeahOmVv+W6puOAglxuICpcbiAqIOWmguaenOS4jeWtmOWcqOacgOWQjuS4gOS4quWNleivje+8jOivt+i/lOWbniAwwqDjgIJcbiAqXG4gKiDor7TmmI7vvJrkuIDkuKrljZXor43mmK/mjIfnlLHlrZfmr43nu4TmiJDvvIzkvYbkuI3ljIXlkKvku7vkvZXnqbrmoLznmoTlrZfnrKbkuLLjgIJcbiAqXG4gKiDnpLrkvos6XG4gKlxuICog6L6T5YWlOiBcIkhlbGxvIFdvcmxkXCJcbiAqIOi+k+WHujogNVxuICpcbiAqXG4gKi9cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGxlbmd0aE9mTGFzdFdvcmQgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XG4gICAgcyA9IHMudHJpbSgpO1xuICAgIGNvbnN0IGxhc3RTcGFjZUluZGV4ID0gcy5sYXN0SW5kZXhPZihcIiBcIik7XG4gICAgcmV0dXJuIGxhc3RTcGFjZUluZGV4ID09PSAtMSA/XG4gICAgICAgIHMubGVuZ3RoIDpcbiAgICAgICAgcy5sZW5ndGggLSBsYXN0U3BhY2VJbmRleCAtIDE7XG5cbn07XG5cbmV4cG9ydCB7fVxuIl19
