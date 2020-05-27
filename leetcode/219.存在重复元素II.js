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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjE5LuWtmOWcqOmHjeWkjeWFg+e0oElJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yMTku5a2Y5Zyo6YeN5aSN5YWD57SgSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTs7Ozs7QUFFSjs7OztHQUlHO0FBQ0gsSUFBSSx1QkFBdUIsR0FBRyxVQUFVLElBQWMsRUFBRSxDQUFTO0lBSS9ELE1BQU0sS0FBSyxHQUFVLEVBQUUsQ0FBQztJQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1NBQ3RDO1FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNoQjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbkUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwRSxnQkFBTSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq5pW05pWw5pWw57uE5ZKM5LiA5Liq5pW05pWwIGvvvIzliKTmlq3mlbDnu4TkuK3mmK/lkKblrZjlnKjkuKTkuKrkuI3lkIznmoTntKLlvJUgaSDlkowgau+8jOS9v+W+lyBudW1zIFtpXSA9IG51bXMgW2pd77yM5bm25LiUIGkg5ZKMIGog55qE5beu55qE57ud5a+55YC85pyA5aSn5Li6IGvjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiBudW1zID0gWzEsMiwzLDFdLCBrID0gM1xyXG7ovpPlh7o6IHRydWVcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IG51bXMgPSBbMSwwLDEsMV0sIGsgPSAxXHJcbui+k+WHujogdHJ1ZVxyXG7npLrkvosgMzpcclxuXHJcbui+k+WFpTogbnVtcyA9IFsxLDIsMywxLDIsM10sIGsgPSAyXHJcbui+k+WHujogZmFsc2VcclxuKiAqL1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcclxuICogQHBhcmFtIHtudW1iZXJ9IGtcclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICovXHJcbnZhciBjb250YWluc05lYXJieUR1cGxpY2F0ZSA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSwgazogbnVtYmVyKSB7XHJcbiAgdHlwZSBjYWNoZSA9IHtcclxuICAgIFtrZXk6IHN0cmluZ106IG51bWJlcjtcclxuICB9O1xyXG4gIGNvbnN0IGNhY2hlOiBjYWNoZSA9IHt9O1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgY3VyID0gbnVtc1tpXTtcclxuICAgIGlmIChjYWNoZVtjdXJdICE9IG51bGwpIHtcclxuICAgICAgaWYgKGkgLSBjYWNoZVtjdXJdIDw9IGspIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgY2FjaGVbY3VyXSA9IGk7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKGNvbnRhaW5zTmVhcmJ5RHVwbGljYXRlKFsxLCAyLCAzLCAxXSwgMyksIHRydWUpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoY29udGFpbnNOZWFyYnlEdXBsaWNhdGUoWzEsIDIsIDMsIDFdLCAyKSwgZmFsc2UpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoY29udGFpbnNOZWFyYnlEdXBsaWNhdGUoWzEsIDIsIDMsIDFdLCA0KSwgdHJ1ZSk7XHJcbiJdfQ==