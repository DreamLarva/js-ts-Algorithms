"use strict";
/*
给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。

示例：

给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3

说明:
    1. 你可以假设数组不可变。
    2. 会多次调用 sumRange 方法。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 根据题意
 * 2. 会多次调用 sumRange 方法。 不能每次都做运算要有 正确的缓存机制
 * 又根据 1. 你可以假设数组不可变。 不用担心原始数据会 变化
 * */
class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.sum_cache = [];
        this.originData = nums;
    }
    /**
     * @param {number} i
     * @param {number} j
     * @return {number}
     */
    sumRange(i, j) {
        // 判断缓存j 位置的值 如果有直接用缓存计算
        if (this.sum_cache[j]) {
            if (i === 0)
                return this.sum_cache[j];
            return this.sum_cache[j] - this.sum_cache[i - 1];
        }
        // 计算缓存
        while (this.sum_cache.length - 1 !== j) {
            if (this.sum_cache.length === 0) {
                this.sum_cache.push(this.originData[0]);
            }
            else {
                const sum_cache_len = this.sum_cache.length;
                this.sum_cache.push(this.sum_cache[sum_cache_len - 1] + this.originData[sum_cache_len]);
            }
        }
        return this.sumRange(i, j);
    }
    ;
}
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
const assert_1 = __importDefault(require("assert"));
const instance = new NumArray([-2, 0, 3, -5, 2, -1]);
assert_1.default.strictEqual(instance.sumRange(0, 2), 1);
assert_1.default.strictEqual(instance.sumRange(2, 5), -1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzAzLuWMuuWfn+WSjOajgOe0oi3mlbDnu4TkuI3lj6/lj5guanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzMwMy7ljLrln5/lkozmo4DntKIt5pWw57uE5LiN5Y+v5Y+YLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjSTs7Ozs7QUFFSjs7OztLQUlLO0FBRUwsTUFBTSxRQUFRO0lBSVY7O09BRUc7SUFDSCxZQUFZLElBQWM7UUFOMUIsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQU9yQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUUzQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFFBQVEsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUN6Qix3QkFBd0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUVELE9BQU87UUFDUCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDSCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FDckUsQ0FBQzthQUNMO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFBQSxDQUFDO0NBRUw7QUFFRDs7OztHQUlHO0FBRUgsb0RBQTRCO0FBRTVCLE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JELGdCQUFNLENBQUMsV0FBVyxDQUNkLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUN2QixDQUFDLENBQ0osQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUN2QixDQUFDLENBQUMsQ0FDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq5pW05pWw5pWw57uEICBudW1z77yM5rGC5Ye65pWw57uE5LuO57Si5byVIGkg5YiwIGogIChpIOKJpCBqKSDojIPlm7TlhoXlhYPntKDnmoTmgLvlkozvvIzljIXlkKsgaSwgIGog5Lik54K544CCXHJcblxyXG7npLrkvovvvJpcclxuXHJcbue7meWumiBudW1zID0gWy0yLCAwLCAzLCAtNSwgMiwgLTFd77yM5rGC5ZKM5Ye95pWw5Li6IHN1bVJhbmdlKClcclxuXHJcbnN1bVJhbmdlKDAsIDIpIC0+IDFcclxuc3VtUmFuZ2UoMiwgNSkgLT4gLTFcclxuc3VtUmFuZ2UoMCwgNSkgLT4gLTNcclxuXHJcbuivtOaYjjpcclxuICAgIDEuIOS9oOWPr+S7peWBh+iuvuaVsOe7hOS4jeWPr+WPmOOAglxyXG4gICAgMi4g5Lya5aSa5qyh6LCD55SoIHN1bVJhbmdlIOaWueazleOAglxyXG4qICovXHJcblxyXG4vKipcclxuICog5qC55o2u6aKY5oSPXHJcbiAqIDIuIOS8muWkmuasoeiwg+eUqCBzdW1SYW5nZSDmlrnms5XjgIIg5LiN6IO95q+P5qyh6YO95YGa6L+Q566X6KaB5pyJIOato+ehrueahOe8k+WtmOacuuWItlxyXG4gKiDlj4jmoLnmja4gMS4g5L2g5Y+v5Lul5YGH6K6+5pWw57uE5LiN5Y+v5Y+Y44CCIOS4jeeUqOaLheW/g+WOn+Wni+aVsOaNruS8miDlj5jljJZcclxuICogKi9cclxuXHJcbmNsYXNzIE51bUFycmF5IHtcclxuICAgIHN1bV9jYWNoZTogbnVtYmVyW10gPSBbXTtcclxuICAgIG9yaWdpbkRhdGE6IG51bWJlcltdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW1zOiBudW1iZXJbXSkge1xyXG4gICAgICAgIHRoaXMub3JpZ2luRGF0YSA9IG51bXM7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGlcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHN1bVJhbmdlKGk6IG51bWJlciwgajogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICAvLyDliKTmlq3nvJPlrZhqIOS9jee9rueahOWAvCDlpoLmnpzmnInnm7TmjqXnlKjnvJPlrZjorqHnrpdcclxuICAgICAgICBpZiAodGhpcy5zdW1fY2FjaGVbal0pIHtcclxuICAgICAgICAgICAgaWYgKGkgPT09IDApIHJldHVybiB0aGlzLnN1bV9jYWNoZVtqXTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VtX2NhY2hlW2pdIC0gdGhpcy5zdW1fY2FjaGVbaSAtIDFdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6K6h566X57yT5a2YXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuc3VtX2NhY2hlLmxlbmd0aCAtIDEgIT09IGopIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3VtX2NhY2hlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdW1fY2FjaGUucHVzaCh0aGlzLm9yaWdpbkRhdGFbMF0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VtX2NhY2hlX2xlbiA9IHRoaXMuc3VtX2NhY2hlLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VtX2NhY2hlLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdW1fY2FjaGVbc3VtX2NhY2hlX2xlbiAtIDFdICsgdGhpcy5vcmlnaW5EYXRhW3N1bV9jYWNoZV9sZW5dLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VtUmFuZ2UoaSwgaik7XHJcbiAgICB9O1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIFlvdXIgTnVtQXJyYXkgb2JqZWN0IHdpbGwgYmUgaW5zdGFudGlhdGVkIGFuZCBjYWxsZWQgYXMgc3VjaDpcclxuICogdmFyIG9iaiA9IG5ldyBOdW1BcnJheShudW1zKVxyXG4gKiB2YXIgcGFyYW1fMSA9IG9iai5zdW1SYW5nZShpLGopXHJcbiAqL1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5jb25zdCBpbnN0YW5jZSA9IG5ldyBOdW1BcnJheShbLTIsIDAsIDMsIC01LCAyLCAtMV0pO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBpbnN0YW5jZS5zdW1SYW5nZSgwLCAyKSxcclxuICAgIDEsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGluc3RhbmNlLnN1bVJhbmdlKDIsIDUpLFxyXG4gICAgLTEsXHJcbik7XHJcbiJdfQ==