"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

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
  // 排序后 使用三个指针
  // 当前指针  当前指针后的一个位置 和 数组最后的位置
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
  (0, assertHelper_1.sortDeep)(threeSum([-1, 0, 1, 2, -1, -4])),
  (0, assertHelper_1.sortDeep)([
    [-1, -1, 2],
    [-1, 0, 1],
  ])
);
assert_1.default.deepStrictEqual(
  (0, assertHelper_1.sortDeep)(
    threeSum([-1, 0, 1, 2, -1, -4, -1, 0, 1, 2, -1, -4, 0])
  ),
  (0, assertHelper_1.sortDeep)([
    [-4, 2, 2],
    [-1, -1, 2],
    [-1, 0, 1],
    [0, 0, 0],
  ])
);
assert_1.default.deepStrictEqual(threeSum([0, 0, 0]), [[0, 0, 0]]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUu5LiJ5pWw5LmL5ZKMLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xNS7kuInmlbDkuYvlkowudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztJQWdCSTtBQUNKOzs7R0FHRztBQUNILElBQUksUUFBUSxHQUFHLFVBQVUsSUFBYztJQUNyQyxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFM0IsU0FBUztJQUNULE9BQU87SUFDUCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUM3QixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0QsU0FBUztJQUNULElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNmLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFFbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFJO1FBQ3JDLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUFFLE1BQU0sQ0FBQyxpQkFBaUI7UUFDekMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxLQUFLLEVBQUU7WUFDdkMsZUFBZTtZQUNmLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9DLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDYixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pEO1lBQ0QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO2dCQUNYLE9BQU8sSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUU7YUFDM0Q7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRTthQUM3RDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRTtLQUNqQztJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUM1Qix1REFBZ0Q7QUFFaEQsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLElBQUEsdUJBQVEsRUFBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDekMsSUFBQSx1QkFBUSxFQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDWCxDQUFDLENBQ0gsQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNwQixJQUFBLHVCQUFRLEVBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNqRSxJQUFBLHVCQUFRLEVBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNWLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDVixDQUFDLENBQ0gsQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5YyF5ZCrIG4g5Liq5pW05pWw55qE5pWw57uEIG51bXPvvIzliKTmlq0gbnVtcyDkuK3mmK/lkKblrZjlnKjkuInkuKrlhYPntKAgYe+8jGLvvIxjIO+8jOS9v+W+lyBhICsgYiArIGMgPSAwIO+8n+aJvuWHuuaJgOaciea7oei2s+adoeS7tuS4lOS4jemHjeWkjeeahOS4ieWFg+e7hOOAglxuXG7ms6jmhI/vvJrnrZTmoYjkuK3kuI3lj6/ku6XljIXlkKvph43lpI3nmoTkuInlhYPnu4TjgIJcblxu5L6L5aaCLCDnu5nlrprmlbDnu4QgbnVtcyA9IFstMSwgMCwgMSwgMiwgLTEsIC00Xe+8jFxuXG7mu6HotrPopoHmsYLnmoTkuInlhYPnu4Tpm4blkIjkuLrvvJpcbltcbiAgWy0xLCAwLCAxXSxcbiAgWy0xLCAtMSwgMl1cbl1cblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zLzNzdW1cbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcmV0dXJuIHtudW1iZXJbXVtdfVxuICovXG52YXIgdGhyZWVTdW0gPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10pIHtcbiAgLy8g5o6S5bqP5ZCOIOS9v+eUqOS4ieS4quaMh+mSiFxuICAvLyDlvZPliY3mjIfpkoggIOW9k+WJjeaMh+mSiOWQjueahOS4gOS4quS9jee9riDlkowg5pWw57uE5pyA5ZCO55qE5L2N572uXG4gIG51bXMuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuXG4gIC8vIOaOkumZpOaegeerr+aDheWGtVxuICAvLyDpg73lsI/kuo4wXG4gIGlmIChudW1zW251bXMubGVuZ3RoIC0gMV0gPCAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIC8vIOmDvSDlpKfkuo4gMFxuICBpZiAobnVtc1swXSA+IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1zLmxlbmd0aCAtIDI7ICkge1xuICAgIGxldCBsZWZ0ID0gaSArIDE7XG4gICAgbGV0IHJpZ2h0ID0gbnVtcy5sZW5ndGggLSAxO1xuICAgIGlmIChudW1zW2ldID4gMCkgYnJlYWs7IC8vIOWQjOagtyDmnIDlt6bkvqfnmoTlgLzkuI3og70g5aSn5LqOMFxuICAgIHdoaWxlIChudW1zW3JpZ2h0XSA+PSAwICYmIGxlZnQgPCByaWdodCkge1xuICAgICAgLy8g5pyA5Y+z5L6n55qE5YC8IOS4jeiDvSDlsI/kuo4wXG4gICAgICBjb25zdCBzdW0gPSBudW1zW2xlZnRdICsgbnVtc1tpXSArIG51bXNbcmlnaHRdO1xuICAgICAgaWYgKHN1bSA9PT0gMCkge1xuICAgICAgICByZXN1bHQucHVzaChbbnVtc1tsZWZ0XSwgbnVtc1tpXSwgbnVtc1tyaWdodF1dKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdW0gPCAwKSB7XG4gICAgICAgIHdoaWxlIChsZWZ0IDwgcmlnaHQgJiYgbnVtc1srK2xlZnRdID09PSBudW1zW2xlZnQgLSAxXSkge31cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlIChsZWZ0IDwgcmlnaHQgJiYgbnVtc1stLXJpZ2h0XSA9PT0gbnVtc1tyaWdodCArIDFdKSB7fVxuICAgICAgfVxuICAgIH1cbiAgICB3aGlsZSAobnVtc1tpXSA9PT0gbnVtc1srK2ldKSB7fVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuaW1wb3J0IHsgc29ydERlZXAgfSBmcm9tIFwiLi4vdXRpbC9hc3NlcnRIZWxwZXJcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgc29ydERlZXAodGhyZWVTdW0oWy0xLCAwLCAxLCAyLCAtMSwgLTRdKSksXG4gIHNvcnREZWVwKFtcbiAgICBbLTEsIC0xLCAyXSxcbiAgICBbLTEsIDAsIDFdLFxuICBdKVxuKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIHNvcnREZWVwKHRocmVlU3VtKFstMSwgMCwgMSwgMiwgLTEsIC00LCAtMSwgMCwgMSwgMiwgLTEsIC00LCAwXSkpLFxuICBzb3J0RGVlcChbXG4gICAgWy00LCAyLCAyXSxcbiAgICBbLTEsIC0xLCAyXSxcbiAgICBbLTEsIDAsIDFdLFxuICAgIFswLCAwLCAwXSxcbiAgXSlcbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKHRocmVlU3VtKFswLCAwLCAwXSksIFtbMCwgMCwgMF1dKTtcbiJdfQ==
