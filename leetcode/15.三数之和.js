"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 使用三个指针
  // 当前指正  当前指针后的一个位置 和 数组最后的位置
  nums.sort((a, b) => a - b);
  // 排除极端情况
  // 都小于0
  if (nums[nums.length - 1] < 0) {
    return [];
  }
  // 都 大于 0
  if (nums[0] > 0) {
    return [];
  }
  const result = [];
  for (let i = 0; i < nums.length - 2; ) {
    let left = i + 1;
    let right = nums.length - 1;
    if (nums[i] > 0) break; // 同样 最左侧的值不能 大于0
    while (nums[right] >= 0 && left < right) {
      // 最右侧的值 不能 小于0
      const sum = nums[left] + nums[i] + nums[right];
      if (sum === 0) {
        result.push([nums[left], nums[i], nums[right]]);
      }
      if (sum < 0) {
        while (left < right && nums[++left] === nums[left - 1]) {}
      } else {
        while (left < right && nums[--right] === nums[right + 1]) {}
      }
    }
    while (nums[i] === nums[++i]) {}
  }
  return result;
};
const assert_1 = __importDefault(require("assert"));
const assertHelper_1 = require("../util/assertHelper");
assert_1.default.deepStrictEqual(
  assertHelper_1.sortDeep(threeSum([-1, 0, 1, 2, -1, -4])),
  assertHelper_1.sortDeep([
    [-1, -1, 2],
    [-1, 0, 1],
  ])
);
assert_1.default.deepStrictEqual(
  assertHelper_1.sortDeep(
    threeSum([-1, 0, 1, 2, -1, -4, -1, 0, 1, 2, -1, -4, 0])
  ),
  assertHelper_1.sortDeep([
    [-4, 2, 2],
    [-1, -1, 2],
    [-1, 0, 1],
    [0, 0, 0],
  ])
);
assert_1.default.deepStrictEqual(threeSum([0, 0, 0]), [[0, 0, 0]]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUu5LiJ5pWw5LmL5ZKMLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xNS7kuInmlbDkuYvlkowudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztJQWdCSTtBQUNKOzs7R0FHRztBQUNILElBQUksUUFBUSxHQUFHLFVBQVUsSUFBYztJQUNuQyxTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFM0IsU0FBUztJQUNULE9BQU87SUFDUCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUMzQixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0QsU0FBUztJQUNULElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNiLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFFbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHO1FBQ2xDLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUFFLE1BQU0sQ0FBQyxpQkFBaUI7UUFDekMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRSxlQUFlO1lBQ3RELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9DLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25EO1lBQ0QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO2dCQUNULE9BQU8sSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFO2lCQUN2RDthQUNKO2lCQUFNO2dCQUNILE9BQU8sSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO2lCQUN6RDthQUNKO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtTQUM3QjtLQUVKO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBR0Ysb0RBQTRCO0FBQzVCLHVEQUE4QztBQUU5QyxnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsdUJBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDekMsdUJBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUN0QyxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLHVCQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNqRSx1QkFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUM3RCxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDbkIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quWMheWQqyBuIOS4quaVtOaVsOeahOaVsOe7hMKgbnVtc++8jOWIpOaWrcKgbnVtc8Kg5Lit5piv5ZCm5a2Y5Zyo5LiJ5Liq5YWD57SgIGHvvIxi77yMYyDvvIzkvb/lvpfCoGEgKyBiICsgYyA9IDAg77yf5om+5Ye65omA5pyJ5ruh6Laz5p2h5Lu25LiU5LiN6YeN5aSN55qE5LiJ5YWD57uE44CCXG5cbuazqOaEj++8muetlOahiOS4reS4jeWPr+S7peWMheWQq+mHjeWkjeeahOS4ieWFg+e7hOOAglxuXG7kvovlpoIsIOe7meWumuaVsOe7hCBudW1zID0gWy0xLCAwLCAxLCAyLCAtMSwgLTRd77yMXG5cbua7oei2s+imgeaxgueahOS4ieWFg+e7hOmbhuWQiOS4uu+8mlxuW1xuICBbLTEsIDAsIDFdLFxuICBbLTEsIC0xLCAyXVxuXVxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvM3N1bVxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEByZXR1cm4ge251bWJlcltdW119XG4gKi9cbnZhciB0aHJlZVN1bSA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xuICAgIC8vIOS9v+eUqOS4ieS4quaMh+mSiFxuICAgIC8vIOW9k+WJjeaMh+atoyAg5b2T5YmN5oyH6ZKI5ZCO55qE5LiA5Liq5L2N572uIOWSjCDmlbDnu4TmnIDlkI7nmoTkvY3nva5cbiAgICBudW1zLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcblxuICAgIC8vIOaOkumZpOaegeerr+aDheWGtVxuICAgIC8vIOmDveWwj+S6jjBcbiAgICBpZiAobnVtc1tudW1zLmxlbmd0aCAtIDFdIDwgMCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIC8vIOmDvSDlpKfkuo4gMFxuICAgIGlmIChudW1zWzBdID4gMCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1zLmxlbmd0aCAtIDI7KSB7XG4gICAgICAgIGxldCBsZWZ0ID0gaSArIDE7XG4gICAgICAgIGxldCByaWdodCA9IG51bXMubGVuZ3RoIC0gMTtcbiAgICAgICAgaWYgKG51bXNbaV0gPiAwKSBicmVhazsgLy8g5ZCM5qC3IOacgOW3puS+p+eahOWAvOS4jeiDvSDlpKfkuo4wXG4gICAgICAgIHdoaWxlIChudW1zW3JpZ2h0XSA+PSAwICYmIGxlZnQgPCByaWdodCkgeyAvLyDmnIDlj7PkvqfnmoTlgLwg5LiN6IO9IOWwj+S6jjBcbiAgICAgICAgICAgIGNvbnN0IHN1bSA9IG51bXNbbGVmdF0gKyBudW1zW2ldICsgbnVtc1tyaWdodF07XG4gICAgICAgICAgICBpZiAoc3VtID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goW251bXNbbGVmdF0sIG51bXNbaV0sIG51bXNbcmlnaHRdXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3VtIDwgMCkge1xuICAgICAgICAgICAgICAgIHdoaWxlIChsZWZ0IDwgcmlnaHQgJiYgbnVtc1srK2xlZnRdID09PSBudW1zW2xlZnQgLSAxXSkge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGxlZnQgPCByaWdodCAmJiBudW1zWy0tcmlnaHRdID09PSBudW1zW3JpZ2h0ICsgMV0pIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKG51bXNbaV0gPT09IG51bXNbKytpXSkge1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5pbXBvcnQge3NvcnREZWVwfSBmcm9tIFwiLi4vdXRpbC9hc3NlcnRIZWxwZXJcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICBzb3J0RGVlcCh0aHJlZVN1bShbLTEsIDAsIDEsIDIsIC0xLCAtNF0pKSxcbiAgICBzb3J0RGVlcChbWy0xLCAtMSwgMl0sIFstMSwgMCwgMV1dKSxcbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIHNvcnREZWVwKHRocmVlU3VtKFstMSwgMCwgMSwgMiwgLTEsIC00LCAtMSwgMCwgMSwgMiwgLTEsIC00LCAwXSkpLFxuICAgIHNvcnREZWVwKFtbLTQsIDIsIDJdLCBbLTEsIC0xLCAyXSwgWy0xLCAwLCAxXSwgWzAsIDAsIDBdXSksXG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICB0aHJlZVN1bShbMCwgMCwgMF0pLFxuICAgIFtbMCwgMCwgMF1dLFxuKTtcbiJdfQ==
