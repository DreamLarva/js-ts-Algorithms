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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzEu5LiL5LiA5Liq5o6S5YiXLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8zMS7kuIvkuIDkuKrmjpLliJcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0lBZUk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLGVBQWUsR0FBRyxVQUFVLElBQWM7SUFDMUMsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdkMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUN2QixvQ0FBb0M7WUFDcEMsZ0NBQWdDO1lBQ2hDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3RDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7Z0JBQ3hFLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtvQkFDZCxTQUFTO29CQUNULENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4QyxvQ0FBb0M7b0JBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDM0IsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ3pDO29CQUNELE9BQU8sSUFBSSxDQUFDO2lCQUNmO2FBQ0o7U0FDSjtLQUNKO0lBRUQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2YsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsU0FBUyxPQUFPLENBQUMsSUFBVyxFQUFFLEtBQWEsRUFBRSxHQUFXO0lBQ3BELElBQUksS0FBSyxLQUFLLEdBQUc7UUFBRSxPQUFPO0lBRTFCLE9BQU8sS0FBSyxHQUFHLEdBQUcsRUFBRTtRQUNoQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNwRCxLQUFLLEVBQUUsQ0FBQztRQUNSLEdBQUcsRUFBRSxDQUFDO0tBQ1Q7QUFDTCxDQUFDO0FBR0Qsb0RBQTRCO0FBRTVCLDBCQUEwQjtBQUMxQixrQ0FBa0M7QUFDbEMsaUJBQWlCO0FBQ2pCLEtBQUs7QUFDTCwwQkFBMEI7QUFDMUIsa0NBQWtDO0FBQ2xDLGlCQUFpQjtBQUNqQixLQUFLO0FBQ0wsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDMUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNaLENBQUM7QUFDRiwwQkFBMEI7QUFDMUIsa0NBQWtDO0FBQ2xDLGlCQUFpQjtBQUNqQixLQUFLO0FBQ0wsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7lrp7njrDojrflj5bkuIvkuIDkuKrmjpLliJfnmoTlh73mlbDvvIznrpfms5XpnIDopoHlsIbnu5nlrprmlbDlrZfluo/liJfph43mlrDmjpLliJfmiJDlrZflhbjluo/kuK3kuIvkuIDkuKrmm7TlpKfnmoTmjpLliJfjgIJcblxu5aaC5p6c5LiN5a2Y5Zyo5LiL5LiA5Liq5pu05aSn55qE5o6S5YiX77yM5YiZ5bCG5pWw5a2X6YeN5paw5o6S5YiX5oiQ5pyA5bCP55qE5o6S5YiX77yI5Y2z5Y2H5bqP5o6S5YiX77yJ44CCXG5cbuW/hemhu+WOn+WcsOS/ruaUue+8jOWPquWFgeiuuOS9v+eUqOmineWkluW4uOaVsOepuumXtOOAglxuXG7ku6XkuIvmmK/kuIDkupvkvovlrZDvvIzovpPlhaXkvY3kuo7lt6bkvqfliJfvvIzlhbbnm7jlupTovpPlh7rkvY3kuo7lj7PkvqfliJfjgIJcbjEsMiwzIOKGkiAxLDMsMlxuMywyLDEg4oaSIDEsMiwzXG4xLDEsNSDihpIgMSw1LDFcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL25leHQtcGVybXV0YXRpb25cbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcmV0dXJuIHt2b2lkfSBEbyBub3QgcmV0dXJuIGFueXRoaW5nLCBtb2RpZnkgbnVtcyBpbi1wbGFjZSBpbnN0ZWFkLlxuICovXG52YXIgbmV4dFBlcm11dGF0aW9uID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XG4gICAgLy8g5pyA5aSn55qE5pWwIOS4gOWumiDku47mnIDlpKflgLzlvIDlp4vpmY3luo9cbiAgICAvLyDlhYjku47lkI7lkJHliY3miavmj48g55u05Yiw5LiA5Liq6Z2e5Y2H5bqP55qE5pWw5a2XIOWwseaYr+W+heS6pOaNoueahOaVsOWtlyDnmoQg6auY5L2NXG4gICAgZm9yIChsZXQgaSA9IG51bXMubGVuZ3RoIC0gMjsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKG51bXNbaV0gPCBudW1zW2kgKyAxXSkge1xuICAgICAgICAgICAgLy8g5LuOIOivpeS9jSDlkJHlkI7miavmj48gIOeUseS6juS5i+WJjeW3sue7j+ivgeWuniDkuYvlkI7nmoTmlbDlrZcg5LiA5a6a5piv6ZmN5bqP5o6S5YiXXG4gICAgICAgICAgICAvLyDmib7liLAg5LiA5Liq6IO9IOabv+aNoiDlvZPliY3mlbDlrZfnmoTkvY3nva4gKOW5tuS4jeegtOWdjyDpmY3luo/mjpLliJcpXG4gICAgICAgICAgICBjb25zdCBoaWdoID0gbnVtc1tpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IG51bXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0ID0gbnVtc1tqICsgMV0gPT0gbnVsbCA/IC1JbmZpbml0eSA6IG51bXNbaiArIDFdOyAvLyDoh7PlsJHmmK/mnIDlkI7kuIDkuKrkvY3nva5cbiAgICAgICAgICAgICAgICBpZiAoaGlnaCA+PSBuZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOS6pOaNoui/meS4pOS4quaVsFxuICAgICAgICAgICAgICAgICAgICBbbnVtc1tpXSwgbnVtc1tqXV0gPSBbbnVtc1tqXSwgbnVtc1tpXV07XG4gICAgICAgICAgICAgICAgICAgIC8vIOeEtuWQjuWwhumrmOS9jeS5i+WQjueahCDmlbDlrZcg5Y+N6L2sKOS5i+WQjueahOaVsOWtlyDlj5jkuLrlrZflhbjluo8g5pyA5bCP55qE57uE5ZCIKVxuICAgICAgICAgICAgICAgICAgICBpZiAoaSArIDEgIT09IG51bXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZShudW1zLCBpICsgMSwgbnVtcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVtcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBudW1zLnJldmVyc2UoKTtcbiAgICByZXR1cm4gbnVtcztcbn07XG5cbmZ1bmN0aW9uIHJldmVyc2UobnVtczogYW55W10sIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG4gICAgaWYgKHN0YXJ0ID09PSBlbmQpIHJldHVybjtcblxuICAgIHdoaWxlIChzdGFydCA8IGVuZCkge1xuICAgICAgICBbbnVtc1tzdGFydF0sIG51bXNbZW5kXV0gPSBbbnVtc1tlbmRdLCBudW1zW3N0YXJ0XV07XG4gICAgICAgIHN0YXJ0Kys7XG4gICAgICAgIGVuZC0tO1xuICAgIH1cbn1cblxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuLy8gYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbi8vICAgICBuZXh0UGVybXV0YXRpb24oWzEsIDIsIDNdKSxcbi8vICAgICBbMSwgMywgMl0sXG4vLyApO1xuLy8gYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbi8vICAgICBuZXh0UGVybXV0YXRpb24oWzMsIDIsIDFdKSxcbi8vICAgICBbMSwgMiwgM10sXG4vLyApO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICBuZXh0UGVybXV0YXRpb24oWzEsIDMsIDJdKSxcbiAgICBbMiwgMSwgM10sXG4pO1xuLy8gYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbi8vICAgICBuZXh0UGVybXV0YXRpb24oWzEsIDEsIDVdKSxcbi8vICAgICBbMSwgNSwgMV0sXG4vLyApO1xuLy9cbiJdfQ==
