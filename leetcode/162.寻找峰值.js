"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
峰值元素是指其值大于左右相邻值的元素。

给定一个输入数组 nums，其中 nums[i] ≠ nums[i+1]，找到峰值元素并返回其索引。

数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。

你可以假设 nums[-1] = nums[n] = -∞。

示例 1:

输入: nums = [1,2,3,1]
输出: 2
解释: 3 是峰值元素，你的函数应该返回其索引 2。
示例 2:

输入: nums = [1,2,1,3,5,6,4]
输出: 1 或 5
解释: 你的函数可以返回索引 1，其峰值元素为 2；
     或者返回索引 5， 其峰值元素为 6。
说明:

你的解法应该是 O(logN) 时间复杂度的。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-peak-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  /**
   * 根据 时间复杂度 只能二分查找法
   * */
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = (right + left) >> 1;
    /**
     * 注意这里的技巧
     * 避免循环无限进行
     * 如果是ceil 那么 循环就会无限进行 因为 如果 只剩2个值
     * 那么 使用ceil 使用的 是右边的值 而如果进入第一个分支就会 left 和 right 不变
     * 所以 有 right = mid 这句的存在 那么 如果只有两个值的时候 就不能是右值 反之同理
     * */
    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(findPeakElement([1, 2, 3, 1]), 2);
assert_1.default.ok([1, 5].includes(findPeakElement([1, 2, 1, 3, 5, 6, 4])));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYyLuWvu+aJvuWzsOWAvC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTYyLuWvu+aJvuWzsOWAvC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEyQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLGVBQWUsR0FBRyxVQUFVLElBQWM7SUFDMUM7O1NBRUs7SUFDTCxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM1QixPQUFPLElBQUksR0FBRyxLQUFLLEVBQUU7UUFDakIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDOzs7Ozs7YUFNSztRQUNMLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDM0IsS0FBSyxHQUFHLEdBQUcsQ0FBQztTQUNmO2FBQU07WUFDSCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNsQjtLQUNKO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBR0Ysb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQzdCLENBQUMsQ0FDSixDQUFDO0FBRUYsZ0JBQU0sQ0FBQyxFQUFFLENBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDMUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7ls7DlgLzlhYPntKDmmK/mjIflhbblgLzlpKfkuo7lt6blj7Pnm7jpgrvlgLznmoTlhYPntKDjgIJcblxu57uZ5a6a5LiA5Liq6L6T5YWl5pWw57uEwqBudW1z77yM5YW25LitIG51bXNbaV0g4omgIG51bXNbaSsxXe+8jOaJvuWIsOWzsOWAvOWFg+e0oOW5tui/lOWbnuWFtue0ouW8leOAglxuXG7mlbDnu4Tlj6/og73ljIXlkKvlpJrkuKrls7DlgLzvvIzlnKjov5nnp43mg4XlhrXkuIvvvIzov5Tlm57ku7vkvZXkuIDkuKrls7DlgLzmiYDlnKjkvY3nva7ljbPlj6/jgIJcblxu5L2g5Y+v5Lul5YGH6K6+wqBudW1zWy0xXSA9IG51bXNbbl0gPSAt4oie44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IG51bXMgPSBbMSwyLDMsMV1cbui+k+WHujogMlxu6Kej6YeKOiAzIOaYr+WzsOWAvOWFg+e0oO+8jOS9oOeahOWHveaVsOW6lOivpei/lOWbnuWFtue0ouW8lSAy44CCXG7npLrkvovCoDI6XG5cbui+k+WFpTogbnVtcyA9IFsxLDIsMSwzLDUsNiw0XVxu6L6T5Ye6OiAxIOaIliA1XG7op6Pph4o6IOS9oOeahOWHveaVsOWPr+S7pei/lOWbnue0ouW8lSAx77yM5YW25bOw5YC85YWD57Sg5Li6IDLvvJtcbsKgICAgIOaIluiAhei/lOWbnue0ouW8lSA177yMIOWFtuWzsOWAvOWFg+e0oOS4uiA244CCXG7or7TmmI46XG5cbuS9oOeahOino+azleW6lOivpeaYr8KgTyhsb2dOKcKg5pe26Ze05aSN5p2C5bqm55qE44CCXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9maW5kLXBlYWstZWxlbWVudFxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGZpbmRQZWFrRWxlbWVudCA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xuICAgIC8qKlxuICAgICAqIOagueaNriDml7bpl7TlpI3mnYLluqYg5Y+q6IO95LqM5YiG5p+l5om+5rOVXG4gICAgICogKi9cbiAgICBsZXQgbGVmdCA9IDA7XG4gICAgbGV0IHJpZ2h0ID0gbnVtcy5sZW5ndGggLSAxO1xuICAgIHdoaWxlIChsZWZ0IDwgcmlnaHQpIHtcbiAgICAgICAgY29uc3QgbWlkID0gKHJpZ2h0ICsgbGVmdCkgPj4gMTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOazqOaEj+i/memHjOeahOaKgOW3p1xuICAgICAgICAgKiDpgb/lhY3lvqrnjq/ml6DpmZDov5vooYxcbiAgICAgICAgICog5aaC5p6c5pivY2VpbCDpgqPkuYgg5b6q546v5bCx5Lya5peg6ZmQ6L+b6KGMIOWboOS4uiDlpoLmnpwg5Y+q5YmpMuS4quWAvFxuICAgICAgICAgKiDpgqPkuYgg5L2/55SoY2VpbCDkvb/nlKjnmoQg5piv5Y+z6L6555qE5YC8IOiAjOWmguaenOi/m+WFpeesrOS4gOS4quWIhuaUr+WwseS8miBsZWZ0IOWSjCByaWdodCDkuI3lj5hcbiAgICAgICAgICog5omA5LulIOaciSByaWdodCA9IG1pZCDov5nlj6XnmoTlrZjlnKgg6YKj5LmIIOWmguaenOWPquacieS4pOS4quWAvOeahOaXtuWAmSDlsLHkuI3og73mmK/lj7PlgLwg5Y+N5LmL5ZCM55CGXG4gICAgICAgICAqICovXG4gICAgICAgIGlmIChudW1zW21pZF0gPiBudW1zW21pZCArIDFdKSB7XG4gICAgICAgICAgICByaWdodCA9IG1pZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxlZnQgPSBtaWQgKyAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsZWZ0O1xufTtcblxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICAgIGZpbmRQZWFrRWxlbWVudChbMSwgMiwgMywgMV0pLFxuICAgIDIsXG4pO1xuXG5hc3NlcnQub2soXG4gICAgWzEsIDVdLmluY2x1ZGVzKGZpbmRQZWFrRWxlbWVudChbMSwgMiwgMSwgMywgNSwgNiwgNF0pKSxcbik7XG4iXX0=
