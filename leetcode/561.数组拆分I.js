"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 n 的 min(ai, bi) 总和最大。

示例 1:

输入: [1,4,3,2]

输出: 4
解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
提示:

n 是正整数,范围在 [1, 10000].
数组中的元素范围在 [-10000, 10000].

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/array-partition-i
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 双指针 怎么做啊?
 * */
var arrayPairSum = function (nums) {
    nums.sort((a, b) => a - b);
    let result = 0;
    for (let i = 0; i < nums.length; i += 2) {
        result += nums[i];
    }
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(arrayPairSum([1, 4, 3, 2]), 4);
assert_1.default.strictEqual(arrayPairSum([6214, -2290, 2833, -7908]), -5075);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTYxLuaVsOe7hOaLhuWIhkkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzU2MS7mlbDnu4Tmi4bliIZJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJJO0FBQ0o7OztHQUdHO0FBQ0g7O0tBRUs7QUFDTCxJQUFJLFlBQVksR0FBRyxVQUFVLElBQWM7SUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzQixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3ZDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkI7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFDRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumumVv+W6puS4uiAybiDnmoTmlbDnu4QsIOS9oOeahOS7u+WKoeaYr+Wwhui/meS6m+aVsOWIhuaIkCBuIOWvuSwg5L6L5aaCIChhMSwgYjEpLCAoYTIsIGIyKSwgLi4uLCAoYW4sIGJuKSDvvIzkvb/lvpfku44xIOWIsCBuIOeahCBtaW4oYWksIGJpKSDmgLvlkozmnIDlpKfjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogWzEsNCwzLDJdXG5cbui+k+WHujogNFxu6Kej6YeKOiBuIOetieS6jiAyLCDmnIDlpKfmgLvlkozkuLogNCA9IG1pbigxLCAyKSArIG1pbigzLCA0KS5cbuaPkOekujpcblxubiDmmK/mraPmlbTmlbAs6IyD5Zu05ZyoIFsxLCAxMDAwMF0uXG7mlbDnu4TkuK3nmoTlhYPntKDojIPlm7TlnKggWy0xMDAwMCwgMTAwMDBdLlxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvYXJyYXktcGFydGl0aW9uLWlcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbi8qKlxuICog5Y+M5oyH6ZKIIOaAjuS5iOWBmuWVij9cbiAqICovXG52YXIgYXJyYXlQYWlyU3VtID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XG4gIG51bXMuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICBsZXQgcmVzdWx0ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1zLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzdWx0ICs9IG51bXNbaV07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoYXJyYXlQYWlyU3VtKFsxLCA0LCAzLCAyXSksIDQpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGFycmF5UGFpclN1bShbNjIxNCwgLTIyOTAsIDI4MzMsIC03OTA4XSksIC01MDc1KTtcbiJdfQ==