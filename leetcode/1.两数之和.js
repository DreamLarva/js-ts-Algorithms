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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS7kuKTmlbDkuYvlkowuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzEu5Lik5pWw5LmL5ZKMLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7SUFXSTs7Ozs7QUFFSjs7OztHQUlHO0FBQ0gsS0FBSztBQUNMLElBQUksTUFBTSxHQUFHLFVBQVUsSUFBYyxFQUFFLE1BQWM7SUFDbkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sRUFBRTtnQkFDaEMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNmO1NBQ0Y7S0FDRjtBQUNILENBQUMsQ0FBQztBQUVGLElBQUksT0FBTyxHQUFHLFVBQVUsSUFBYyxFQUFFLE1BQWM7SUFDcEQsSUFBSSxHQUFHLEdBQWdDLEVBQUUsQ0FBQztJQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ2hDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxJQUFJLEdBQUcsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdEI7S0FDRjtBQUNILENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quaVtOaVsOaVsOe7hCBudW1zIOWSjOS4gOS4quebruagh+WAvCB0YXJnZXTvvIzor7fkvaDlnKjor6XmlbDnu4TkuK3mib7lh7rlkozkuLrnm67moIflgLznmoTpgqMg5Lik5LiqIOaVtOaVsO+8jOW5tui/lOWbnuS7luS7rOeahOaVsOe7hOS4i+agh+OAglxuXG7kvaDlj6/ku6XlgYforr7mr4/np43ovpPlhaXlj6rkvJrlr7nlupTkuIDkuKrnrZTmoYjjgILkvYbmmK/vvIzkvaDkuI3og73ph43lpI3liKnnlKjov5nkuKrmlbDnu4TkuK3lkIzmoLfnmoTlhYPntKDjgIJcblxu56S65L6LOlxuXG7nu5nlrpogbnVtcyA9IFsyLCA3LCAxMSwgMTVdLCB0YXJnZXQgPSA5XG5cbuWboOS4uiBudW1zWzBdICsgbnVtc1sxXSA9IDIgKyA3ID0gOVxu5omA5Lul6L+U5ZueIFswLCAxXVxuKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEBwYXJhbSB7bnVtYmVyfSB0YXJnZXRcbiAqIEByZXR1cm4ge251bWJlcltdfVxuICovXG4vLyDmmrTliptcbnZhciB0d29TdW0gPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10sIHRhcmdldDogbnVtYmVyKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBudW1zLmxlbmd0aDsgaSA8IGxlbiAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGxlbjsgaisrKSB7XG4gICAgICBpZiAobnVtc1tpXSArIG51bXNbal0gPT09IHRhcmdldCkge1xuICAgICAgICByZXR1cm4gW2ksIGpdO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudmFyIHR3b1N1bTEgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10sIHRhcmdldDogbnVtYmVyKSB7XG4gIGxldCBtYXA6IHsgW2luZGV4OiBudW1iZXJdOiBudW1iZXIgfSA9IHt9O1xuICBudW1zLmZvckVhY2goKGk6IG51bWJlciwgaW5kZXgpID0+IHtcbiAgICBtYXBbaV0gPSBpbmRleDtcbiAgfSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBzZWMgPSB0YXJnZXQgLSBudW1zW2ldO1xuICAgIGlmICghIW1hcFtzZWNdICYmIG1hcFtzZWNdICE9PSBpKSB7XG4gICAgICByZXR1cm4gW2ksIG1hcFtzZWNdXTtcbiAgICB9XG4gIH1cbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh0d29TdW0xKFsyLCA3LCAxMSwgMTVdLCA5KSwgWzAsIDFdKTtcbiJdfQ==