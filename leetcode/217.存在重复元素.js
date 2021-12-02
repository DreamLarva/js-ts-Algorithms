"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

示例 1:

输入: [1,2,3,1]
输出: true
示例 2:

输入: [1,2,3,4]
输出: false
示例 3:

输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
* */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return nums.length !== new Set(nums).size;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.ok(containsDuplicate([1, 2, 3, 3]));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjE3LuWtmOWcqOmHjeWkjeWFg+e0oC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjE3LuWtmOWcqOmHjeWkjeWFg+e0oC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTtBQUNKOzs7R0FHRztBQUNILElBQUksaUJBQWlCLEdBQUcsVUFBVSxJQUFjO0lBQzlDLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDNUMsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuWmguaenOS7u+S9leWAvOWcqOaVsOe7hOS4reWHuueOsOiHs+WwkeS4pOasoe+8jOWHveaVsOi/lOWbniB0cnVl44CC5aaC5p6c5pWw57uE5Lit5q+P5Liq5YWD57Sg6YO95LiN55u45ZCM77yM5YiZ6L+U5ZueIGZhbHNl44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IFsxLDIsMywxXVxu6L6T5Ye6OiB0cnVlXG7npLrkvosgMjpcblxu6L6T5YWlOiBbMSwyLDMsNF1cbui+k+WHujogZmFsc2VcbuekuuS+iyAzOlxuXG7ovpPlhaU6IFsxLDEsMSwzLDMsNCwzLDIsNCwyXVxu6L6T5Ye6OiB0cnVlXG4qICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbnZhciBjb250YWluc0R1cGxpY2F0ZSA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xuICByZXR1cm4gbnVtcy5sZW5ndGggIT09IG5ldyBTZXQobnVtcykuc2l6ZTtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQub2soY29udGFpbnNEdXBsaWNhdGUoWzEsIDIsIDMsIDNdKSk7XG4iXX0=
