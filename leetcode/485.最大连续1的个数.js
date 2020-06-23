"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个二进制数组， 计算其中最大连续1的个数。

示例 1:

输入: [1,1,0,1,1,1]
输出: 3
解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
注意：

输入的数组只包含 0 和1。
输入数组的长度是正整数，且不超过 10,000。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/max-consecutive-ones
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    if (nums.length === 0)
        return 0;
    return Math.max(...nums
        .join("")
        .split("0")
        .map((v) => v.length));
};
/**
 * 快约20倍
 * */
var findMaxConsecutiveOnes_1 = function (nums) {
    if (nums.length === 0)
        return 0;
    let max = 0;
    let current_length = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            max = Math.max(max, current_length);
            current_length = 0;
        }
        else {
            current_length++;
        }
    }
    return Math.max(max, current_length);
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]), 3);
assert_1.default.strictEqual(findMaxConsecutiveOnes_1([1, 1, 0, 1, 1, 1]), 3);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDg1LuacgOWkp+i/nue7rTHnmoTkuKrmlbAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzQ4NS7mnIDlpKfov57nu60x55qE5Liq5pWwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLHNCQUFzQixHQUFHLFVBQVUsSUFBYztJQUNuRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FDYixHQUFHLElBQUk7U0FDSixJQUFJLENBQUMsRUFBRSxDQUFDO1NBQ1IsS0FBSyxDQUFDLEdBQUcsQ0FBQztTQUNWLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUN4QixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUY7O0tBRUs7QUFDTCxJQUFJLHdCQUF3QixHQUFHLFVBQVUsSUFBYztJQUNyRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQztJQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ3BDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDcEI7YUFBTTtZQUNMLGNBQWMsRUFBRSxDQUFDO1NBQ2xCO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsRSxnQkFBTSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrkuozov5vliLbmlbDnu4TvvIwg6K6h566X5YW25Lit5pyA5aSn6L+e57utMeeahOS4quaVsOOAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOiBbMSwxLDAsMSwxLDFdXG7ovpPlh7o6IDNcbuino+mHijog5byA5aS055qE5Lik5L2N5ZKM5pyA5ZCO55qE5LiJ5L2N6YO95piv6L+e57utMe+8jOaJgOS7peacgOWkp+i/nue7rTHnmoTkuKrmlbDmmK8gMy5cbuazqOaEj++8mlxuXG7ovpPlhaXnmoTmlbDnu4Tlj6rljIXlkKvCoDAg5ZKMMeOAglxu6L6T5YWl5pWw57uE55qE6ZW/5bqm5piv5q2j5pW05pWw77yM5LiU5LiN6LaF6L+HIDEwLDAwMOOAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvbWF4LWNvbnNlY3V0aXZlLW9uZXNcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBmaW5kTWF4Q29uc2VjdXRpdmVPbmVzID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XG4gIGlmIChudW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XG4gIHJldHVybiBNYXRoLm1heChcbiAgICAuLi5udW1zXG4gICAgICAuam9pbihcIlwiKVxuICAgICAgLnNwbGl0KFwiMFwiKVxuICAgICAgLm1hcCgodikgPT4gdi5sZW5ndGgpXG4gICk7XG59O1xuXG4vKipcbiAqIOW/q+e6pjIw5YCNXG4gKiAqL1xudmFyIGZpbmRNYXhDb25zZWN1dGl2ZU9uZXNfMSA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xuICBpZiAobnVtcy5sZW5ndGggPT09IDApIHJldHVybiAwO1xuICBsZXQgbWF4ID0gMDtcbiAgbGV0IGN1cnJlbnRfbGVuZ3RoID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG51bXNbaV0gPT09IDApIHtcbiAgICAgIG1heCA9IE1hdGgubWF4KG1heCwgY3VycmVudF9sZW5ndGgpO1xuICAgICAgY3VycmVudF9sZW5ndGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50X2xlbmd0aCsrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBNYXRoLm1heChtYXgsIGN1cnJlbnRfbGVuZ3RoKTtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoZmluZE1heENvbnNlY3V0aXZlT25lcyhbMSwgMSwgMCwgMSwgMSwgMV0pLCAzKTtcbmFzc2VydC5zdHJpY3RFcXVhbChmaW5kTWF4Q29uc2VjdXRpdmVPbmVzXzEoWzEsIDEsIDAsIDEsIDEsIDFdKSwgMyk7XG4iXX0=