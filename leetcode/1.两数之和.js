"use strict";
/*
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力
var twoSum = function (nums, target) {
    for (let i = 0, len = nums.length; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
var twoSum1 = function (nums, target) {
    let map = {};
    nums.forEach((i, index) => {
        map[i] = index;
    });
    for (let i = 0; i < nums.length; i++) {
        let sec = target - nums[i];
        if (!!map[sec] && map[sec] !== i) {
            return [i, map[sec]];
        }
    }
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(twoSum1([2, 7, 11, 15], 9), [0, 1]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS7kuKTmlbDkuYvlkowuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzEu5Lik5pWw5LmL5ZKMLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7SUFXSTs7Ozs7QUFFSjs7OztHQUlHO0FBQ0gsS0FBSztBQUNMLElBQUksTUFBTSxHQUFHLFVBQVUsSUFBYyxFQUFFLE1BQWM7SUFDakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUIsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sRUFBRTtnQkFDOUIsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNqQjtTQUNKO0tBQ0o7QUFDTCxDQUFDLENBQUM7QUFFRixJQUFJLE9BQU8sR0FBRyxVQUFVLElBQWMsRUFBRSxNQUFjO0lBQ2xELElBQUksR0FBRyxHQUFnQyxFQUFFLENBQUM7SUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUM5QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbEMsSUFBSSxHQUFHLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5QixPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO0tBQ0o7QUFDTCxDQUFDLENBQUM7QUFHRixvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quaVtOaVsOaVsOe7hCBudW1zIOWSjOS4gOS4quebruagh+WAvCB0YXJnZXTvvIzor7fkvaDlnKjor6XmlbDnu4TkuK3mib7lh7rlkozkuLrnm67moIflgLznmoTpgqMg5Lik5LiqIOaVtOaVsO+8jOW5tui/lOWbnuS7luS7rOeahOaVsOe7hOS4i+agh+OAglxyXG5cclxu5L2g5Y+v5Lul5YGH6K6+5q+P56eN6L6T5YWl5Y+q5Lya5a+55bqU5LiA5Liq562U5qGI44CC5L2G5piv77yM5L2g5LiN6IO96YeN5aSN5Yip55So6L+Z5Liq5pWw57uE5Lit5ZCM5qC355qE5YWD57Sg44CCXHJcblxyXG7npLrkvos6XHJcblxyXG7nu5nlrpogbnVtcyA9IFsyLCA3LCAxMSwgMTVdLCB0YXJnZXQgPSA5XHJcblxyXG7lm6DkuLogbnVtc1swXSArIG51bXNbMV0gPSAyICsgNyA9IDlcclxu5omA5Lul6L+U5ZueIFswLCAxXVxyXG4qICovXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xyXG4gKiBAcGFyYW0ge251bWJlcn0gdGFyZ2V0XHJcbiAqIEByZXR1cm4ge251bWJlcltdfVxyXG4gKi9cclxuLy8g5pq05YqbXHJcbnZhciB0d29TdW0gPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10sIHRhcmdldDogbnVtYmVyKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbnVtcy5sZW5ndGg7IGkgPCBsZW4gLSAxOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBsZW47IGorKykge1xyXG4gICAgICAgICAgICBpZiAobnVtc1tpXSArIG51bXNbal0gPT09IHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtpLCBqXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciB0d29TdW0xID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdLCB0YXJnZXQ6IG51bWJlcikge1xyXG4gICAgbGV0IG1hcDogeyBbaW5kZXg6IG51bWJlcl06IG51bWJlciB9ID0ge307XHJcbiAgICBudW1zLmZvckVhY2goKGk6IG51bWJlciwgaW5kZXgpID0+IHtcclxuICAgICAgICBtYXBbaV0gPSBpbmRleDtcclxuICAgIH0pO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHNlYyA9IHRhcmdldCAtIG51bXNbaV07XHJcbiAgICAgICAgaWYgKCEhbWFwW3NlY10gJiYgbWFwW3NlY10gIT09IGkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtpLCBtYXBbc2VjXV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKHR3b1N1bTEoWzIsIDcsIDExLCAxNV0sIDkpLCBbMCwgMV0pO1xyXG4iXX0=