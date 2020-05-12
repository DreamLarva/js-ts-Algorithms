"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

请找出其中最小的元素。

你可以假设数组中不存在重复元素。

示例 1:

输入: [3,4,5,1,2]
输出: 1
示例 2:

输入: [4,5,6,7,0,1,2]
输出: 0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];
  /**
   * 依然是二分法
   * */
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (left + 1 === right) return Math.min(nums[left], nums[right]);
    const mid = Math.ceil((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[right];
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(findMin([3, 4, 5, 1, 2]), 1);
assert_1.default.strictEqual(findMin([4, 5, 6, 7, 0, 1, 2]), 0);
assert_1.default.strictEqual(findMin([2, 3, 1]), 1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUzLuWvu+aJvuaXi+i9rOaOkuW6j+aVsOe7hOS4reeahOacgOWwj+WAvC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTUzLuWvu+aJvuaXi+i9rOaOkuW6j+aVsOe7hOS4reeahOacgOWwj+WAvC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFxQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLE9BQU8sR0FBRyxVQUFVLElBQWM7SUFDbEMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0Qzs7U0FFSztJQUNMLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLE9BQU8sSUFBSSxHQUFHLEtBQUssRUFBRTtRQUNqQixJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssS0FBSztZQUFFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakUsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDbEI7YUFBTTtZQUNILEtBQUssR0FBRyxHQUFHLENBQUM7U0FDZjtLQUNKO0lBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFdkIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUN4QixDQUFDLENBQ0osQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQzlCLENBQUMsQ0FDSixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNsQixDQUFDLENBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7lgYforr7mjInnhafljYfluo/mjpLluo/nmoTmlbDnu4TlnKjpooTlhYjmnKrnn6XnmoTmn5DkuKrngrnkuIrov5vooYzkuobml4vovazjgIJcblxuKCDkvovlpoLvvIzmlbDnu4TCoFswLDEsMiw0LDUsNiw3XSDlj6/og73lj5jkuLrCoFs0LDUsNiw3LDAsMSwyXcKgKeOAglxuXG7or7fmib7lh7rlhbbkuK3mnIDlsI/nmoTlhYPntKDjgIJcblxu5L2g5Y+v5Lul5YGH6K6+5pWw57uE5Lit5LiN5a2Y5Zyo6YeN5aSN5YWD57Sg44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IFszLDQsNSwxLDJdXG7ovpPlh7o6IDFcbuekuuS+iyAyOlxuXG7ovpPlhaU6IFs0LDUsNiw3LDAsMSwyXVxu6L6T5Ye6OiAwXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9maW5kLW1pbmltdW0taW4tcm90YXRlZC1zb3J0ZWQtYXJyYXlcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBmaW5kTWluID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XG4gICAgaWYgKG51bXMubGVuZ3RoID09PSAxKSByZXR1cm4gbnVtc1swXTtcbiAgICAvKipcbiAgICAgKiDkvp3nhLbmmK/kuozliIbms5VcbiAgICAgKiAqL1xuICAgIGxldCBsZWZ0ID0gMDtcbiAgICBsZXQgcmlnaHQgPSBudW1zLmxlbmd0aCAtIDE7XG4gICAgd2hpbGUgKGxlZnQgPCByaWdodCkge1xuICAgICAgICBpZiAobGVmdCArIDEgPT09IHJpZ2h0KSByZXR1cm4gTWF0aC5taW4obnVtc1tsZWZ0XSwgbnVtc1tyaWdodF0pO1xuICAgICAgICBjb25zdCBtaWQgPSBNYXRoLmNlaWwoKGxlZnQgKyByaWdodCkgLyAyKTtcbiAgICAgICAgaWYgKG51bXNbbWlkXSA+IG51bXNbcmlnaHRdKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbWlkICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbWlkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudW1zW3JpZ2h0XTtcblxufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgICBmaW5kTWluKFszLCA0LCA1LCAxLCAyXSksXG4gICAgMSxcbik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gICAgZmluZE1pbihbNCwgNSwgNiwgNywgMCwgMSwgMl0pLFxuICAgIDAsXG4pO1xuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICAgIGZpbmRNaW4oWzIsIDMsIDFdKSxcbiAgICAxLFxuKTtcbiJdfQ==
