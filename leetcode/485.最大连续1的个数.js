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
    return Math.max(...nums.join("").split("0").map(v => v.length));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDg1LuacgOWkp+i/nue7rTHnmoTkuKrmlbAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzQ4NS7mnIDlpKfov57nu60x55qE5Liq5pWwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLHNCQUFzQixHQUFHLFVBQVUsSUFBYztJQUNqRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3BFLENBQUMsQ0FBQztBQUVGOztLQUVLO0FBQ0wsSUFBSSx3QkFBd0IsR0FBRyxVQUFVLElBQWM7SUFDbkQsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbEMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2YsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ3BDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDdEI7YUFBTTtZQUNILGNBQWMsRUFBRSxDQUFDO1NBQ3BCO0tBQ0o7SUFFRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQztBQUdGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDMUMsQ0FBQyxDQUNKLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDNUMsQ0FBQyxDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5LqM6L+b5Yi25pWw57uE77yMIOiuoeeul+WFtuS4reacgOWkp+i/nue7rTHnmoTkuKrmlbDjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogWzEsMSwwLDEsMSwxXVxu6L6T5Ye6OiAzXG7op6Pph4o6IOW8gOWktOeahOS4pOS9jeWSjOacgOWQjueahOS4ieS9jemDveaYr+i/nue7rTHvvIzmiYDku6XmnIDlpKfov57nu60x55qE5Liq5pWw5pivIDMuXG7ms6jmhI/vvJpcblxu6L6T5YWl55qE5pWw57uE5Y+q5YyF5ZCrwqAwIOWSjDHjgIJcbui+k+WFpeaVsOe7hOeahOmVv+W6puaYr+ato+aVtOaVsO+8jOS4lOS4jei2hei/hyAxMCwwMDDjgIJcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL21heC1jb25zZWN1dGl2ZS1vbmVzXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgZmluZE1heENvbnNlY3V0aXZlT25lcyA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xuICAgIGlmIChudW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XG4gICAgcmV0dXJuIE1hdGgubWF4KC4uLm51bXMuam9pbihcIlwiKS5zcGxpdChcIjBcIikubWFwKHYgPT4gdi5sZW5ndGgpKTtcbn07XG5cbi8qKlxuICog5b+r57qmMjDlgI1cbiAqICovXG52YXIgZmluZE1heENvbnNlY3V0aXZlT25lc18xID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XG4gICAgaWYgKG51bXMubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcbiAgICBsZXQgbWF4ID0gMDtcbiAgICBsZXQgY3VycmVudF9sZW5ndGggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobnVtc1tpXSA9PT0gMCkge1xuICAgICAgICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCBjdXJyZW50X2xlbmd0aCk7XG4gICAgICAgICAgICBjdXJyZW50X2xlbmd0aCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50X2xlbmd0aCsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgubWF4KG1heCwgY3VycmVudF9sZW5ndGgpO1xufTtcblxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICAgIGZpbmRNYXhDb25zZWN1dGl2ZU9uZXMoWzEsIDEsIDAsIDEsIDEsIDFdKSxcbiAgICAzLFxuKTtcbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgICBmaW5kTWF4Q29uc2VjdXRpdmVPbmVzXzEoWzEsIDEsIDAsIDEsIDEsIDFdKSxcbiAgICAzLFxuKTtcblxuXG5cbiJdfQ==