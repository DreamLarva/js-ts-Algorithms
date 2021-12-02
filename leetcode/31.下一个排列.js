"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
  if (start === end) return;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzEu5LiL5LiA5Liq5o6S5YiXLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8zMS7kuIvkuIDkuKrmjpLliJcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0lBZUk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLGVBQWUsR0FBRyxVQUFVLElBQWM7SUFDNUMsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDekMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUN6QixvQ0FBb0M7WUFDcEMsZ0NBQWdDO1lBQ2hDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7Z0JBQ3hFLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtvQkFDaEIsU0FBUztvQkFDVCxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEMsb0NBQW9DO29CQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQzdCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUN2QztvQkFDRCxPQUFPLElBQUksQ0FBQztpQkFDYjthQUNGO1NBQ0Y7S0FDRjtJQUVELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNmLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBRUYsU0FBUyxPQUFPLENBQUMsSUFBVyxFQUFFLEtBQWEsRUFBRSxHQUFXO0lBQ3RELElBQUksS0FBSyxLQUFLLEdBQUc7UUFBRSxPQUFPO0lBRTFCLE9BQU8sS0FBSyxHQUFHLEdBQUcsRUFBRTtRQUNsQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNwRCxLQUFLLEVBQUUsQ0FBQztRQUNSLEdBQUcsRUFBRSxDQUFDO0tBQ1A7QUFDSCxDQUFDO0FBRUQsb0RBQTRCO0FBRTVCLDBCQUEwQjtBQUMxQixrQ0FBa0M7QUFDbEMsaUJBQWlCO0FBQ2pCLEtBQUs7QUFDTCwwQkFBMEI7QUFDMUIsa0NBQWtDO0FBQ2xDLGlCQUFpQjtBQUNqQixLQUFLO0FBQ0wsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlELDBCQUEwQjtBQUMxQixrQ0FBa0M7QUFDbEMsaUJBQWlCO0FBQ2pCLEtBQUs7QUFDTCxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuWunueOsOiOt+WPluS4i+S4gOS4quaOkuWIl+eahOWHveaVsO+8jOeul+azlemcgOimgeWwhue7meWumuaVsOWtl+W6j+WIl+mHjeaWsOaOkuWIl+aIkOWtl+WFuOW6j+S4reS4i+S4gOS4quabtOWkp+eahOaOkuWIl+OAglxuXG7lpoLmnpzkuI3lrZjlnKjkuIvkuIDkuKrmm7TlpKfnmoTmjpLliJfvvIzliJnlsIbmlbDlrZfph43mlrDmjpLliJfmiJDmnIDlsI/nmoTmjpLliJfvvIjljbPljYfluo/mjpLliJfvvInjgIJcblxu5b+F6aG75Y6f5Zyw5L+u5pS577yM5Y+q5YWB6K645L2/55So6aKd5aSW5bi45pWw56m66Ze044CCXG5cbuS7peS4i+aYr+S4gOS6m+S+i+WtkO+8jOi+k+WFpeS9jeS6juW3puS+p+WIl++8jOWFtuebuOW6lOi+k+WHuuS9jeS6juWPs+S+p+WIl+OAglxuMSwyLDMg4oaSIDEsMywyXG4zLDIsMSDihpIgMSwyLDNcbjEsMSw1IOKGkiAxLDUsMVxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvbmV4dC1wZXJtdXRhdGlvblxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEByZXR1cm4ge3ZvaWR9IERvIG5vdCByZXR1cm4gYW55dGhpbmcsIG1vZGlmeSBudW1zIGluLXBsYWNlIGluc3RlYWQuXG4gKi9cbnZhciBuZXh0UGVybXV0YXRpb24gPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10pIHtcbiAgLy8g5pyA5aSn55qE5pWwIOS4gOWumiDku47mnIDlpKflgLzlvIDlp4vpmY3luo9cbiAgLy8g5YWI5LuO5ZCO5ZCR5YmN5omr5o+PIOebtOWIsOS4gOS4qumdnuWNh+W6j+eahOaVsOWtlyDlsLHmmK/lvoXkuqTmjaLnmoTmlbDlrZcg55qEIOmrmOS9jVxuICBmb3IgKGxldCBpID0gbnVtcy5sZW5ndGggLSAyOyBpID49IDA7IGktLSkge1xuICAgIGlmIChudW1zW2ldIDwgbnVtc1tpICsgMV0pIHtcbiAgICAgIC8vIOS7jiDor6XkvY0g5ZCR5ZCO5omr5o+PICDnlLHkuo7kuYvliY3lt7Lnu4/or4Hlrp4g5LmL5ZCO55qE5pWw5a2XIOS4gOWumuaYr+mZjeW6j+aOkuWIl1xuICAgICAgLy8g5om+5YiwIOS4gOS4quiDvSDmm7/mjaIg5b2T5YmN5pWw5a2X55qE5L2N572uICjlubbkuI3noLTlnY8g6ZmN5bqP5o6S5YiXKVxuICAgICAgY29uc3QgaGlnaCA9IG51bXNbaV07XG4gICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBudW1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBudW1zW2ogKyAxXSA9PSBudWxsID8gLUluZmluaXR5IDogbnVtc1tqICsgMV07IC8vIOiHs+WwkeaYr+acgOWQjuS4gOS4quS9jee9rlxuICAgICAgICBpZiAoaGlnaCA+PSBuZXh0KSB7XG4gICAgICAgICAgLy8g5Lqk5o2i6L+Z5Lik5Liq5pWwXG4gICAgICAgICAgW251bXNbaV0sIG51bXNbal1dID0gW251bXNbal0sIG51bXNbaV1dO1xuICAgICAgICAgIC8vIOeEtuWQjuWwhumrmOS9jeS5i+WQjueahCDmlbDlrZcg5Y+N6L2sKOS5i+WQjueahOaVsOWtlyDlj5jkuLrlrZflhbjluo8g5pyA5bCP55qE57uE5ZCIKVxuICAgICAgICAgIGlmIChpICsgMSAhPT0gbnVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICByZXZlcnNlKG51bXMsIGkgKyAxLCBudW1zLmxlbmd0aCAtIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbnVtcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG51bXMucmV2ZXJzZSgpO1xuICByZXR1cm4gbnVtcztcbn07XG5cbmZ1bmN0aW9uIHJldmVyc2UobnVtczogYW55W10sIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG4gIGlmIChzdGFydCA9PT0gZW5kKSByZXR1cm47XG5cbiAgd2hpbGUgKHN0YXJ0IDwgZW5kKSB7XG4gICAgW251bXNbc3RhcnRdLCBudW1zW2VuZF1dID0gW251bXNbZW5kXSwgbnVtc1tzdGFydF1dO1xuICAgIHN0YXJ0Kys7XG4gICAgZW5kLS07XG4gIH1cbn1cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbi8vIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4vLyAgICAgbmV4dFBlcm11dGF0aW9uKFsxLCAyLCAzXSksXG4vLyAgICAgWzEsIDMsIDJdLFxuLy8gKTtcbi8vIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4vLyAgICAgbmV4dFBlcm11dGF0aW9uKFszLCAyLCAxXSksXG4vLyAgICAgWzEsIDIsIDNdLFxuLy8gKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwobmV4dFBlcm11dGF0aW9uKFsxLCAzLCAyXSksIFsyLCAxLCAzXSk7XG4vLyBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuLy8gICAgIG5leHRQZXJtdXRhdGlvbihbMSwgMSwgNV0pLFxuLy8gICAgIFsxLCA1LCAxXSxcbi8vICk7XG4vL1xuIl19
