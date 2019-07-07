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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
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
            if (i - cache[cur] <= k)
                return true;
        }
        cache[cur] = i;
    }
    return false;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(containsNearbyDuplicate([1, 2, 3, 1], 3), true);
assert_1.default.strictEqual(containsNearbyDuplicate([1, 2, 3, 1], 2), false);
assert_1.default.strictEqual(containsNearbyDuplicate([1, 2, 3, 1], 4), true);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjE5LuWtmOWcqOmHjeWkjeWFg+e0oElJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yMTku5a2Y5Zyo6YeN5aSN5YWD57SgSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTs7Ozs7QUFFSjs7OztHQUlHO0FBQ0gsSUFBSSx1QkFBdUIsR0FBRyxVQUFVLElBQWMsRUFBRSxDQUFTO0lBSTdELE1BQU0sS0FBSyxHQUFVLEVBQUUsQ0FBQztJQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNsQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1NBQ3hDO1FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsQjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ25FLGdCQUFNLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quaVtOaVsOaVsOe7hOWSjOS4gOS4quaVtOaVsCBr77yM5Yik5pat5pWw57uE5Lit5piv5ZCm5a2Y5Zyo5Lik5Liq5LiN5ZCM55qE57Si5byVIGkg5ZKMIGrvvIzkvb/lvpcgbnVtcyBbaV0gPSBudW1zIFtqXe+8jOW5tuS4lCBpIOWSjCBqIOeahOW3rueahOe7neWvueWAvOacgOWkp+S4uiBr44CCXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTogbnVtcyA9IFsxLDIsMywxXSwgayA9IDNcclxu6L6T5Ye6OiB0cnVlXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOiBudW1zID0gWzEsMCwxLDFdLCBrID0gMVxyXG7ovpPlh7o6IHRydWVcclxu56S65L6LIDM6XHJcblxyXG7ovpPlhaU6IG51bXMgPSBbMSwyLDMsMSwyLDNdLCBrID0gMlxyXG7ovpPlh7o6IGZhbHNlXHJcbiogKi9cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBrXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG52YXIgY29udGFpbnNOZWFyYnlEdXBsaWNhdGUgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10sIGs6IG51bWJlcikge1xyXG4gICAgdHlwZSBjYWNoZSA9IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBudW1iZXJcclxuICAgIH1cclxuICAgIGNvbnN0IGNhY2hlOiBjYWNoZSA9IHt9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY3VyID0gbnVtc1tpXTtcclxuICAgICAgICBpZiAoY2FjaGVbY3VyXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChpIC0gY2FjaGVbY3VyXSA8PSBrKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FjaGVbY3VyXSA9IGk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChjb250YWluc05lYXJieUR1cGxpY2F0ZShbMSwgMiwgMywgMV0sIDMpLCB0cnVlKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGNvbnRhaW5zTmVhcmJ5RHVwbGljYXRlKFsxLCAyLCAzLCAxXSwgMiksIGZhbHNlKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGNvbnRhaW5zTmVhcmJ5RHVwbGljYXRlKFsxLCAyLCAzLCAxXSwgNCksIHRydWUpO1xyXG4iXX0=