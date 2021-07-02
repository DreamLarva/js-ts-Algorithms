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

输入的数组只包含 0 和1。
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDg1LuacgOWkp+i/nue7rTHnmoTkuKrmlbAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzQ4NS7mnIDlpKfov57nu60x55qE5Liq5pWwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLHNCQUFzQixHQUFHLFVBQVUsSUFBYztJQUNuRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FDYixHQUFHLElBQUk7U0FDSixJQUFJLENBQUMsRUFBRSxDQUFDO1NBQ1IsS0FBSyxDQUFDLEdBQUcsQ0FBQztTQUNWLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUN4QixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUY7O0tBRUs7QUFDTCxJQUFJLHdCQUF3QixHQUFHLFVBQVUsSUFBYztJQUNyRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQztJQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ3BDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDcEI7YUFBTTtZQUNMLGNBQWMsRUFBRSxDQUFDO1NBQ2xCO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsRSxnQkFBTSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrkuozov5vliLbmlbDnu4TvvIwg6K6h566X5YW25Lit5pyA5aSn6L+e57utMeeahOS4quaVsOOAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOiBbMSwxLDAsMSwxLDFdXG7ovpPlh7o6IDNcbuino+mHijog5byA5aS055qE5Lik5L2N5ZKM5pyA5ZCO55qE5LiJ5L2N6YO95piv6L+e57utMe+8jOaJgOS7peacgOWkp+i/nue7rTHnmoTkuKrmlbDmmK8gMy5cbuazqOaEj++8mlxuXG7ovpPlhaXnmoTmlbDnu4Tlj6rljIXlkKsgMCDlkowx44CCXG7ovpPlhaXmlbDnu4TnmoTplb/luqbmmK/mraPmlbTmlbDvvIzkuJTkuI3otoXov4cgMTAsMDAw44CCXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9tYXgtY29uc2VjdXRpdmUtb25lc1xu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGZpbmRNYXhDb25zZWN1dGl2ZU9uZXMgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10pIHtcbiAgaWYgKG51bXMubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcbiAgcmV0dXJuIE1hdGgubWF4KFxuICAgIC4uLm51bXNcbiAgICAgIC5qb2luKFwiXCIpXG4gICAgICAuc3BsaXQoXCIwXCIpXG4gICAgICAubWFwKCh2KSA9PiB2Lmxlbmd0aClcbiAgKTtcbn07XG5cbi8qKlxuICog5b+r57qmMjDlgI1cbiAqICovXG52YXIgZmluZE1heENvbnNlY3V0aXZlT25lc18xID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XG4gIGlmIChudW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XG4gIGxldCBtYXggPSAwO1xuICBsZXQgY3VycmVudF9sZW5ndGggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobnVtc1tpXSA9PT0gMCkge1xuICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCBjdXJyZW50X2xlbmd0aCk7XG4gICAgICBjdXJyZW50X2xlbmd0aCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRfbGVuZ3RoKys7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE1hdGgubWF4KG1heCwgY3VycmVudF9sZW5ndGgpO1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChmaW5kTWF4Q29uc2VjdXRpdmVPbmVzKFsxLCAxLCAwLCAxLCAxLCAxXSksIDMpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGZpbmRNYXhDb25zZWN1dGl2ZU9uZXNfMShbMSwgMSwgMCwgMSwgMSwgMV0pLCAzKTtcbiJdfQ==