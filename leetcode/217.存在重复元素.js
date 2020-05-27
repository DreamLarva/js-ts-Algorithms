"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjE3LuWtmOWcqOmHjeWkjeWFg+e0oC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjE3LuWtmOWcqOmHjeWkjeWFg+e0oC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTtBQUNKOzs7R0FHRztBQUNILElBQUksaUJBQWlCLEdBQUcsVUFBVSxJQUFjO0lBQzlDLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDNUMsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu5aaC5p6c5Lu75L2V5YC85Zyo5pWw57uE5Lit5Ye6546w6Iez5bCR5Lik5qyh77yM5Ye95pWw6L+U5ZueIHRydWXjgILlpoLmnpzmlbDnu4TkuK3mr4/kuKrlhYPntKDpg73kuI3nm7jlkIzvvIzliJnov5Tlm54gZmFsc2XjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiBbMSwyLDMsMV1cclxu6L6T5Ye6OiB0cnVlXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOiBbMSwyLDMsNF1cclxu6L6T5Ye6OiBmYWxzZVxyXG7npLrkvosgMzpcclxuXHJcbui+k+WFpTogWzEsMSwxLDMsMyw0LDMsMiw0LDJdXHJcbui+k+WHujogdHJ1ZVxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG52YXIgY29udGFpbnNEdXBsaWNhdGUgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10pIHtcclxuICByZXR1cm4gbnVtcy5sZW5ndGggIT09IG5ldyBTZXQobnVtcykuc2l6ZTtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0Lm9rKGNvbnRhaW5zRHVwbGljYXRlKFsxLCAyLCAzLCAzXSkpO1xyXG4iXX0=