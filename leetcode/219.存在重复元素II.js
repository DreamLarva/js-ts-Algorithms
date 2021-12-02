"use strict";
/*
给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。

示例 1:

输入: nums = [1,2,3,1], k = 3
输出: true
示例 2:

输入: nums = [1,0,1,1], k = 1
输出: true
示例 3:

输入: nums = [1,2,3,1,2,3], k = 2
输出: false
* */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const cache = {};
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (cache[cur] != null) {
      if (i - cache[cur] <= k) return true;
    }
    cache[cur] = i;
  }
  return false;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(containsNearbyDuplicate([1, 2, 3, 1], 3), true);
assert_1.default.strictEqual(containsNearbyDuplicate([1, 2, 3, 1], 2), false);
assert_1.default.strictEqual(containsNearbyDuplicate([1, 2, 3, 1], 4), true);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjE5LuWtmOWcqOmHjeWkjeWFg+e0oElJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yMTku5a2Y5Zyo6YeN5aSN5YWD57SgSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTs7Ozs7QUFFSjs7OztHQUlHO0FBQ0gsSUFBSSx1QkFBdUIsR0FBRyxVQUFVLElBQWMsRUFBRSxDQUFTO0lBSS9ELE1BQU0sS0FBSyxHQUFVLEVBQUUsQ0FBQztJQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1NBQ3RDO1FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNoQjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbkUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwRSxnQkFBTSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quaVtOaVsOaVsOe7hOWSjOS4gOS4quaVtOaVsCBr77yM5Yik5pat5pWw57uE5Lit5piv5ZCm5a2Y5Zyo5Lik5Liq5LiN5ZCM55qE57Si5byVIGkg5ZKMIGrvvIzkvb/lvpcgbnVtcyBbaV0gPSBudW1zIFtqXe+8jOW5tuS4lCBpIOWSjCBqIOeahOW3rueahOe7neWvueWAvOacgOWkp+S4uiBr44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IG51bXMgPSBbMSwyLDMsMV0sIGsgPSAzXG7ovpPlh7o6IHRydWVcbuekuuS+iyAyOlxuXG7ovpPlhaU6IG51bXMgPSBbMSwwLDEsMV0sIGsgPSAxXG7ovpPlh7o6IHRydWVcbuekuuS+iyAzOlxuXG7ovpPlhaU6IG51bXMgPSBbMSwyLDMsMSwyLDNdLCBrID0gMlxu6L6T5Ye6OiBmYWxzZVxuKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBrXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG52YXIgY29udGFpbnNOZWFyYnlEdXBsaWNhdGUgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10sIGs6IG51bWJlcikge1xuICB0eXBlIGNhY2hlID0ge1xuICAgIFtrZXk6IHN0cmluZ106IG51bWJlcjtcbiAgfTtcbiAgY29uc3QgY2FjaGU6IGNhY2hlID0ge307XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGN1ciA9IG51bXNbaV07XG4gICAgaWYgKGNhY2hlW2N1cl0gIT0gbnVsbCkge1xuICAgICAgaWYgKGkgLSBjYWNoZVtjdXJdIDw9IGspIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYWNoZVtjdXJdID0gaTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGNvbnRhaW5zTmVhcmJ5RHVwbGljYXRlKFsxLCAyLCAzLCAxXSwgMyksIHRydWUpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGNvbnRhaW5zTmVhcmJ5RHVwbGljYXRlKFsxLCAyLCAzLCAxXSwgMiksIGZhbHNlKTtcbmFzc2VydC5zdHJpY3RFcXVhbChjb250YWluc05lYXJieUR1cGxpY2F0ZShbMSwgMiwgMywgMV0sIDQpLCB0cnVlKTtcbiJdfQ==
