"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
在一个给定的数组nums中，总是存在一个最大元素 。

查找数组中的最大元素是否至少是数组中每个其他数字的两倍。

如果是，则返回最大元素的索引，否则返回-1。

示例 1:

输入: nums = [3, 6, 1, 0]
输出: 1
解释: 6是最大的整数, 对于数组中的其他整数,
6大于数组中其他元素的两倍。6的索引是1, 所以我们返回1.
 

示例 2:

输入: nums = [1, 2, 3, 4]
输出: -1
解释: 4没有超过3的两倍大, 所以我们返回 -1.
 

提示:
1. nums 的长度范围在[1, 50].
2. 每个 nums[i] 的整数范围在 [0, 99].
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    if (nums.length === 1)
        return 0;
    let max_index;
    let second_max_index;
    if (nums[0] > nums[1]) {
        max_index = 0;
        second_max_index = 1;
    }
    else {
        max_index = 1;
        second_max_index = 0;
    }
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] > nums[max_index]) {
            second_max_index = max_index;
            max_index = i;
            continue;
        }
        if (nums[i] > nums[second_max_index]) {
            second_max_index = i;
        }
    }
    return nums[second_max_index] * 2 <= nums[max_index] ? max_index : -1;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(dominantIndex([1, 2, 3, 4]), -1);
assert_1.default.strictEqual(dominantIndex([3, 6, 1, 0]), 1);
assert_1.default.strictEqual(dominantIndex([6, 3, 1, 0]), 0);
assert_1.default.strictEqual(dominantIndex([0, 0, 3, 2]), -1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzQ3LuiHs+WwkeaYr+WFtuS7luaVsOWtl+S4pOWAjeeahOacgOWkp+aVsC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzQ3LuiHs+WwkeaYr+WFtuS7luaVsOWtl+S4pOWAjeeahOacgOWkp+aVsC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBeUJJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxhQUFhLEdBQUcsVUFBVSxJQUFjO0lBQzFDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEMsSUFBSSxTQUFTLENBQUM7SUFDZCxJQUFJLGdCQUFnQixDQUFDO0lBQ3JCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNyQixTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0tBQ3RCO1NBQU07UUFDTCxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0tBQ3RCO0lBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDcEMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzdCLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztZQUM3QixTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsU0FBUztTQUNWO1FBRUQsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDcEMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1NBQ3RCO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEUsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVwRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25ELGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuWcqOS4gOS4que7meWumueahOaVsOe7hG51bXPkuK3vvIzmgLvmmK/lrZjlnKjkuIDkuKrmnIDlpKflhYPntKAg44CCXG5cbuafpeaJvuaVsOe7hOS4reeahOacgOWkp+WFg+e0oOaYr+WQpuiHs+WwkeaYr+aVsOe7hOS4reavj+S4quWFtuS7luaVsOWtl+eahOS4pOWAjeOAglxuXG7lpoLmnpzmmK/vvIzliJnov5Tlm57mnIDlpKflhYPntKDnmoTntKLlvJXvvIzlkKbliJnov5Tlm54tMeOAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOiBudW1zID0gWzMsIDYsIDEsIDBdXG7ovpPlh7o6IDFcbuino+mHijogNuaYr+acgOWkp+eahOaVtOaVsCwg5a+55LqO5pWw57uE5Lit55qE5YW25LuW5pW05pWwLFxuNuWkp+S6juaVsOe7hOS4reWFtuS7luWFg+e0oOeahOS4pOWAjeOAgjbnmoTntKLlvJXmmK8xLCDmiYDku6XmiJHku6zov5Tlm54xLlxuwqBcblxu56S65L6LIDI6XG5cbui+k+WFpTogbnVtcyA9IFsxLCAyLCAzLCA0XVxu6L6T5Ye6OiAtMVxu6Kej6YeKOiA05rKh5pyJ6LaF6L+HM+eahOS4pOWAjeWkpywg5omA5Lul5oiR5Lus6L+U5ZueIC0xLlxuwqBcblxu5o+Q56S6OlxuMS4gbnVtc8Kg55qE6ZW/5bqm6IyD5Zu05ZyoWzEsIDUwXS5cbjIuIOavj+S4qsKgbnVtc1tpXcKg55qE5pW05pWw6IyD5Zu05ZyowqBbMCwgOTldLlxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBkb21pbmFudEluZGV4ID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XG4gIGlmIChudW1zLmxlbmd0aCA9PT0gMSkgcmV0dXJuIDA7XG4gIGxldCBtYXhfaW5kZXg7XG4gIGxldCBzZWNvbmRfbWF4X2luZGV4O1xuICBpZiAobnVtc1swXSA+IG51bXNbMV0pIHtcbiAgICBtYXhfaW5kZXggPSAwO1xuICAgIHNlY29uZF9tYXhfaW5kZXggPSAxO1xuICB9IGVsc2Uge1xuICAgIG1heF9pbmRleCA9IDE7XG4gICAgc2Vjb25kX21heF9pbmRleCA9IDA7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMjsgaSA8IG51bXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobnVtc1tpXSA+IG51bXNbbWF4X2luZGV4XSkge1xuICAgICAgc2Vjb25kX21heF9pbmRleCA9IG1heF9pbmRleDtcbiAgICAgIG1heF9pbmRleCA9IGk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAobnVtc1tpXSA+IG51bXNbc2Vjb25kX21heF9pbmRleF0pIHtcbiAgICAgIHNlY29uZF9tYXhfaW5kZXggPSBpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1zW3NlY29uZF9tYXhfaW5kZXhdICogMiA8PSBudW1zW21heF9pbmRleF0gPyBtYXhfaW5kZXggOiAtMTtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoZG9taW5hbnRJbmRleChbMSwgMiwgMywgNF0pLCAtMSk7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChkb21pbmFudEluZGV4KFszLCA2LCAxLCAwXSksIDEpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGRvbWluYW50SW5kZXgoWzYsIDMsIDEsIDBdKSwgMCk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoZG9taW5hbnRJbmRleChbMCwgMCwgMywgMl0pLCAtMSk7XG4iXX0=