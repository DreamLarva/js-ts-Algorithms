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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDg1LuacgOWkp+i/nue7rTHnmoTkuKrmlbAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzQ4NS7mnIDlpKfov57nu60x55qE5Liq5pWwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLHNCQUFzQixHQUFHLFVBQVUsSUFBYztJQUNuRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FDYixHQUFHLElBQUk7U0FDSixJQUFJLENBQUMsRUFBRSxDQUFDO1NBQ1IsS0FBSyxDQUFDLEdBQUcsQ0FBQztTQUNWLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUN4QixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUY7O0tBRUs7QUFDTCxJQUFJLHdCQUF3QixHQUFHLFVBQVUsSUFBYztJQUNyRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQztJQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ3BDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDcEI7YUFBTTtZQUNMLGNBQWMsRUFBRSxDQUFDO1NBQ2xCO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsRSxnQkFBTSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quS6jOi/m+WItuaVsOe7hO+8jCDorqHnrpflhbbkuK3mnIDlpKfov57nu60x55qE5Liq5pWw44CCXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTogWzEsMSwwLDEsMSwxXVxyXG7ovpPlh7o6IDNcclxu6Kej6YeKOiDlvIDlpLTnmoTkuKTkvY3lkozmnIDlkI7nmoTkuInkvY3pg73mmK/ov57nu60x77yM5omA5Lul5pyA5aSn6L+e57utMeeahOS4quaVsOaYryAzLlxyXG7ms6jmhI/vvJpcclxuXHJcbui+k+WFpeeahOaVsOe7hOWPquWMheWQq8KgMCDlkowx44CCXHJcbui+k+WFpeaVsOe7hOeahOmVv+W6puaYr+ato+aVtOaVsO+8jOS4lOS4jei2hei/hyAxMCwwMDDjgIJcclxuXHJcbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXHJcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL21heC1jb25zZWN1dGl2ZS1vbmVzXHJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBmaW5kTWF4Q29uc2VjdXRpdmVPbmVzID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XHJcbiAgaWYgKG51bXMubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcclxuICByZXR1cm4gTWF0aC5tYXgoXHJcbiAgICAuLi5udW1zXHJcbiAgICAgIC5qb2luKFwiXCIpXHJcbiAgICAgIC5zcGxpdChcIjBcIilcclxuICAgICAgLm1hcCgodikgPT4gdi5sZW5ndGgpXHJcbiAgKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDlv6vnuqYyMOWAjVxyXG4gKiAqL1xyXG52YXIgZmluZE1heENvbnNlY3V0aXZlT25lc18xID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XHJcbiAgaWYgKG51bXMubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcclxuICBsZXQgbWF4ID0gMDtcclxuICBsZXQgY3VycmVudF9sZW5ndGggPSAwO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKG51bXNbaV0gPT09IDApIHtcclxuICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCBjdXJyZW50X2xlbmd0aCk7XHJcbiAgICAgIGN1cnJlbnRfbGVuZ3RoID0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN1cnJlbnRfbGVuZ3RoKys7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gTWF0aC5tYXgobWF4LCBjdXJyZW50X2xlbmd0aCk7XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChmaW5kTWF4Q29uc2VjdXRpdmVPbmVzKFsxLCAxLCAwLCAxLCAxLCAxXSksIDMpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoZmluZE1heENvbnNlY3V0aXZlT25lc18xKFsxLCAxLCAwLCAxLCAxLCAxXSksIDMpO1xyXG4iXX0=