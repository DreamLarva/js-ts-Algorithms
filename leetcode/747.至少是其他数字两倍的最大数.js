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
1. nums 的长度范围在[1, 50].
2. 每个 nums[i] 的整数范围在 [0, 99].
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzQ3LuiHs+WwkeaYr+WFtuS7luaVsOWtl+S4pOWAjeeahOacgOWkp+aVsC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzQ3LuiHs+WwkeaYr+WFtuS7luaVsOWtl+S4pOWAjeeahOacgOWkp+aVsC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBeUJJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxhQUFhLEdBQUcsVUFBVSxJQUFjO0lBQzFDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEMsSUFBSSxTQUFTLENBQUM7SUFDZCxJQUFJLGdCQUFnQixDQUFDO0lBQ3JCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNyQixTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0tBQ3RCO1NBQU07UUFDTCxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0tBQ3RCO0lBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDcEMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzdCLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztZQUM3QixTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsU0FBUztTQUNWO1FBRUQsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDcEMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1NBQ3RCO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEUsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVwRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25ELGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuWcqOS4gOS4que7meWumueahOaVsOe7hG51bXPkuK3vvIzmgLvmmK/lrZjlnKjkuIDkuKrmnIDlpKflhYPntKAg44CCXG5cbuafpeaJvuaVsOe7hOS4reeahOacgOWkp+WFg+e0oOaYr+WQpuiHs+WwkeaYr+aVsOe7hOS4reavj+S4quWFtuS7luaVsOWtl+eahOS4pOWAjeOAglxuXG7lpoLmnpzmmK/vvIzliJnov5Tlm57mnIDlpKflhYPntKDnmoTntKLlvJXvvIzlkKbliJnov5Tlm54tMeOAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOiBudW1zID0gWzMsIDYsIDEsIDBdXG7ovpPlh7o6IDFcbuino+mHijogNuaYr+acgOWkp+eahOaVtOaVsCwg5a+55LqO5pWw57uE5Lit55qE5YW25LuW5pW05pWwLFxuNuWkp+S6juaVsOe7hOS4reWFtuS7luWFg+e0oOeahOS4pOWAjeOAgjbnmoTntKLlvJXmmK8xLCDmiYDku6XmiJHku6zov5Tlm54xLlxuXG5cbuekuuS+iyAyOlxuXG7ovpPlhaU6IG51bXMgPSBbMSwgMiwgMywgNF1cbui+k+WHujogLTFcbuino+mHijogNOayoeaciei2hei/hzPnmoTkuKTlgI3lpKcsIOaJgOS7peaIkeS7rOi/lOWbniAtMS5cblxuXG7mj5DnpLo6XG4xLiBudW1zIOeahOmVv+W6puiMg+WbtOWcqFsxLCA1MF0uXG4yLiDmr4/kuKogbnVtc1tpXSDnmoTmlbTmlbDojIPlm7TlnKggWzAsIDk5XS5cbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgZG9taW5hbnRJbmRleCA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xuICBpZiAobnVtcy5sZW5ndGggPT09IDEpIHJldHVybiAwO1xuICBsZXQgbWF4X2luZGV4O1xuICBsZXQgc2Vjb25kX21heF9pbmRleDtcbiAgaWYgKG51bXNbMF0gPiBudW1zWzFdKSB7XG4gICAgbWF4X2luZGV4ID0gMDtcbiAgICBzZWNvbmRfbWF4X2luZGV4ID0gMTtcbiAgfSBlbHNlIHtcbiAgICBtYXhfaW5kZXggPSAxO1xuICAgIHNlY29uZF9tYXhfaW5kZXggPSAwO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDI7IGkgPCBudW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG51bXNbaV0gPiBudW1zW21heF9pbmRleF0pIHtcbiAgICAgIHNlY29uZF9tYXhfaW5kZXggPSBtYXhfaW5kZXg7XG4gICAgICBtYXhfaW5kZXggPSBpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKG51bXNbaV0gPiBudW1zW3NlY29uZF9tYXhfaW5kZXhdKSB7XG4gICAgICBzZWNvbmRfbWF4X2luZGV4ID0gaTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtc1tzZWNvbmRfbWF4X2luZGV4XSAqIDIgPD0gbnVtc1ttYXhfaW5kZXhdID8gbWF4X2luZGV4IDogLTE7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGRvbWluYW50SW5kZXgoWzEsIDIsIDMsIDRdKSwgLTEpO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoZG9taW5hbnRJbmRleChbMywgNiwgMSwgMF0pLCAxKTtcbmFzc2VydC5zdHJpY3RFcXVhbChkb21pbmFudEluZGV4KFs2LCAzLCAxLCAwXSksIDApO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGRvbWluYW50SW5kZXgoWzAsIDAsIDMsIDJdKSwgLTEpO1xuIl19