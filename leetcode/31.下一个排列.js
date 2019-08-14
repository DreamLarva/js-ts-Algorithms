"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须原地修改，只允许使用额外常数空间。

以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/next-permutation
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    // 最大的数 一定 从最大值开始降序
    // 先从后向前扫描 直到一个非升序的数字 就是待交换的数字 的 高位
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            // 从 该位 向后扫描  由于之前已经证实 之后的数字 一定是降序排列
            // 找到 一个能 替换 当前数字的位置 (并不破坏 降序排列)
            const high = nums[i];
            for (let j = i + 1; j < nums.length; j++) {
                const next = nums[j + 1] == null ? -Infinity : nums[j + 1]; // 至少是最后一个位置
                if (high >= next) {
                    // 交换这两个数
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                    // 然后将高位之后的 数字 反转(之后的数字 变为字典序 最小的组合)
                    if (i + 1 !== nums.length - 1) {
                        reverse(nums, i + 1, nums.length - 1);
                    }
                    return nums;
                }
            }
        }
    }
    nums.reverse();
    return nums;
};
function reverse(nums, start, end) {
    if (start === end)
        return;
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}
const assert_1 = __importDefault(require("assert"));
// assert.deepStrictEqual(
//     nextPermutation([1, 2, 3]),
//     [1, 3, 2],
// );
// assert.deepStrictEqual(
//     nextPermutation([3, 2, 1]),
//     [1, 2, 3],
// );
assert_1.default.deepStrictEqual(nextPermutation([1, 3, 2]), [2, 1, 3]);
// assert.deepStrictEqual(
//     nextPermutation([1, 1, 5]),
//     [1, 5, 1],
// );
//
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzEu5LiL5LiA5Liq5o6S5YiXLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8zMS7kuIvkuIDkuKrmjpLliJcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0lBZUk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLGVBQWUsR0FBRyxVQUFVLElBQWM7SUFDMUMsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdkMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUN2QixvQ0FBb0M7WUFDcEMsZ0NBQWdDO1lBQ2hDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3RDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7Z0JBQ3hFLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtvQkFDZCxTQUFTO29CQUNULENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4QyxvQ0FBb0M7b0JBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDM0IsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ3pDO29CQUNELE9BQU8sSUFBSSxDQUFDO2lCQUNmO2FBQ0o7U0FDSjtLQUNKO0lBRUQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2YsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsU0FBUyxPQUFPLENBQUMsSUFBVyxFQUFFLEtBQWEsRUFBRSxHQUFXO0lBQ3BELElBQUksS0FBSyxLQUFLLEdBQUc7UUFBRSxPQUFPO0lBRTFCLE9BQU8sS0FBSyxHQUFHLEdBQUcsRUFBRTtRQUNoQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNwRCxLQUFLLEVBQUUsQ0FBQztRQUNSLEdBQUcsRUFBRSxDQUFDO0tBQ1Q7QUFDTCxDQUFDO0FBR0Qsb0RBQTRCO0FBRTVCLDBCQUEwQjtBQUMxQixrQ0FBa0M7QUFDbEMsaUJBQWlCO0FBQ2pCLEtBQUs7QUFDTCwwQkFBMEI7QUFDMUIsa0NBQWtDO0FBQ2xDLGlCQUFpQjtBQUNqQixLQUFLO0FBQ0wsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDMUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNaLENBQUM7QUFDRiwwQkFBMEI7QUFDMUIsa0NBQWtDO0FBQ2xDLGlCQUFpQjtBQUNqQixLQUFLO0FBQ0wsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuWunueOsOiOt+WPluS4i+S4gOS4quaOkuWIl+eahOWHveaVsO+8jOeul+azlemcgOimgeWwhue7meWumuaVsOWtl+W6j+WIl+mHjeaWsOaOkuWIl+aIkOWtl+WFuOW6j+S4reS4i+S4gOS4quabtOWkp+eahOaOkuWIl+OAglxyXG5cclxu5aaC5p6c5LiN5a2Y5Zyo5LiL5LiA5Liq5pu05aSn55qE5o6S5YiX77yM5YiZ5bCG5pWw5a2X6YeN5paw5o6S5YiX5oiQ5pyA5bCP55qE5o6S5YiX77yI5Y2z5Y2H5bqP5o6S5YiX77yJ44CCXHJcblxyXG7lv4Xpobvljp/lnLDkv67mlLnvvIzlj6rlhYHorrjkvb/nlKjpop3lpJbluLjmlbDnqbrpl7TjgIJcclxuXHJcbuS7peS4i+aYr+S4gOS6m+S+i+WtkO+8jOi+k+WFpeS9jeS6juW3puS+p+WIl++8jOWFtuebuOW6lOi+k+WHuuS9jeS6juWPs+S+p+WIl+OAglxyXG4xLDIsMyDihpIgMSwzLDJcclxuMywyLDEg4oaSIDEsMiwzXHJcbjEsMSw1IOKGkiAxLDUsMVxyXG5cclxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcclxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvbmV4dC1wZXJtdXRhdGlvblxyXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xyXG4gKiBAcmV0dXJuIHt2b2lkfSBEbyBub3QgcmV0dXJuIGFueXRoaW5nLCBtb2RpZnkgbnVtcyBpbi1wbGFjZSBpbnN0ZWFkLlxyXG4gKi9cclxudmFyIG5leHRQZXJtdXRhdGlvbiA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xyXG4gICAgLy8g5pyA5aSn55qE5pWwIOS4gOWumiDku47mnIDlpKflgLzlvIDlp4vpmY3luo9cclxuICAgIC8vIOWFiOS7juWQjuWQkeWJjeaJq+aPjyDnm7TliLDkuIDkuKrpnZ7ljYfluo/nmoTmlbDlrZcg5bCx5piv5b6F5Lqk5o2i55qE5pWw5a2XIOeahCDpq5jkvY1cclxuICAgIGZvciAobGV0IGkgPSBudW1zLmxlbmd0aCAtIDI7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgaWYgKG51bXNbaV0gPCBudW1zW2kgKyAxXSkge1xyXG4gICAgICAgICAgICAvLyDku44g6K+l5L2NIOWQkeWQjuaJq+aPjyAg55Sx5LqO5LmL5YmN5bey57uP6K+B5a6eIOS5i+WQjueahOaVsOWtlyDkuIDlrprmmK/pmY3luo/mjpLliJdcclxuICAgICAgICAgICAgLy8g5om+5YiwIOS4gOS4quiDvSDmm7/mjaIg5b2T5YmN5pWw5a2X55qE5L2N572uICjlubbkuI3noLTlnY8g6ZmN5bqP5o6S5YiXKVxyXG4gICAgICAgICAgICBjb25zdCBoaWdoID0gbnVtc1tpXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgbnVtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IG51bXNbaiArIDFdID09IG51bGwgPyAtSW5maW5pdHkgOiBudW1zW2ogKyAxXTsgLy8g6Iez5bCR5piv5pyA5ZCO5LiA5Liq5L2N572uXHJcbiAgICAgICAgICAgICAgICBpZiAoaGlnaCA+PSBuZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lqk5o2i6L+Z5Lik5Liq5pWwXHJcbiAgICAgICAgICAgICAgICAgICAgW251bXNbaV0sIG51bXNbal1dID0gW251bXNbal0sIG51bXNbaV1dO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOeEtuWQjuWwhumrmOS9jeS5i+WQjueahCDmlbDlrZcg5Y+N6L2sKOS5i+WQjueahOaVsOWtlyDlj5jkuLrlrZflhbjluo8g5pyA5bCP55qE57uE5ZCIKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpICsgMSAhPT0gbnVtcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldmVyc2UobnVtcywgaSArIDEsIG51bXMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudW1zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG51bXMucmV2ZXJzZSgpO1xyXG4gICAgcmV0dXJuIG51bXM7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZXZlcnNlKG51bXM6IGFueVtdLCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xyXG4gICAgaWYgKHN0YXJ0ID09PSBlbmQpIHJldHVybjtcclxuXHJcbiAgICB3aGlsZSAoc3RhcnQgPCBlbmQpIHtcclxuICAgICAgICBbbnVtc1tzdGFydF0sIG51bXNbZW5kXV0gPSBbbnVtc1tlbmRdLCBudW1zW3N0YXJ0XV07XHJcbiAgICAgICAgc3RhcnQrKztcclxuICAgICAgICBlbmQtLTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuLy8gYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuLy8gICAgIG5leHRQZXJtdXRhdGlvbihbMSwgMiwgM10pLFxyXG4vLyAgICAgWzEsIDMsIDJdLFxyXG4vLyApO1xyXG4vLyBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4vLyAgICAgbmV4dFBlcm11dGF0aW9uKFszLCAyLCAxXSksXHJcbi8vICAgICBbMSwgMiwgM10sXHJcbi8vICk7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBuZXh0UGVybXV0YXRpb24oWzEsIDMsIDJdKSxcclxuICAgIFsyLCAxLCAzXSxcclxuKTtcclxuLy8gYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuLy8gICAgIG5leHRQZXJtdXRhdGlvbihbMSwgMSwgNV0pLFxyXG4vLyAgICAgWzEsIDUsIDFdLFxyXG4vLyApO1xyXG4vL1xyXG4iXX0=