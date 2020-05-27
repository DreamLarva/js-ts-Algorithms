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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzAzLuWMuuWfn+WSjOajgOe0oi3mlbDnu4TkuI3lj6/lj5guanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzMwMy7ljLrln5/lkozmo4DntKIt5pWw57uE5LiN5Y+v5Y+YLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjSTs7Ozs7QUFFSjs7OztLQUlLO0FBRUwsTUFBTSxRQUFRO0lBSVo7O09BRUc7SUFDSCxZQUFZLElBQWM7UUFOMUIsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQU92QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFFBQVEsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUMzQix3QkFBd0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNsRDtRQUVELE9BQU87UUFDUCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6QztpQkFBTTtnQkFDTCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQ25FLENBQUM7YUFDSDtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUFFRDs7OztHQUlHO0FBRUgsb0RBQTRCO0FBRTVCLE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JELGdCQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9DLGdCQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrmlbTmlbDmlbDnu4QgIG51bXPvvIzmsYLlh7rmlbDnu4Tku47ntKLlvJUgaSDliLAgaiAgKGkg4omkIGopIOiMg+WbtOWGheWFg+e0oOeahOaAu+WSjO+8jOWMheWQqyBpLCAgaiDkuKTngrnjgIJcclxuXHJcbuekuuS+i++8mlxyXG5cclxu57uZ5a6aIG51bXMgPSBbLTIsIDAsIDMsIC01LCAyLCAtMV3vvIzmsYLlkozlh73mlbDkuLogc3VtUmFuZ2UoKVxyXG5cclxuc3VtUmFuZ2UoMCwgMikgLT4gMVxyXG5zdW1SYW5nZSgyLCA1KSAtPiAtMVxyXG5zdW1SYW5nZSgwLCA1KSAtPiAtM1xyXG5cclxu6K+05piOOlxyXG4gICAgMS4g5L2g5Y+v5Lul5YGH6K6+5pWw57uE5LiN5Y+v5Y+Y44CCXHJcbiAgICAyLiDkvJrlpJrmrKHosIPnlKggc3VtUmFuZ2Ug5pa55rOV44CCXHJcbiogKi9cclxuXHJcbi8qKlxyXG4gKiDmoLnmja7popjmhI9cclxuICogMi4g5Lya5aSa5qyh6LCD55SoIHN1bVJhbmdlIOaWueazleOAgiDkuI3og73mr4/mrKHpg73lgZrov5DnrpfopoHmnIkg5q2j56Gu55qE57yT5a2Y5py65Yi2XHJcbiAqIOWPiOagueaNriAxLiDkvaDlj6/ku6XlgYforr7mlbDnu4TkuI3lj6/lj5jjgIIg5LiN55So5ouF5b+D5Y6f5aeL5pWw5o2u5LyaIOWPmOWMllxyXG4gKiAqL1xyXG5cclxuY2xhc3MgTnVtQXJyYXkge1xyXG4gIHN1bV9jYWNoZTogbnVtYmVyW10gPSBbXTtcclxuICBvcmlnaW5EYXRhOiBudW1iZXJbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG51bXM6IG51bWJlcltdKSB7XHJcbiAgICB0aGlzLm9yaWdpbkRhdGEgPSBudW1zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlcclxuICAgKiBAcGFyYW0ge251bWJlcn0galxyXG4gICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgKi9cclxuICBzdW1SYW5nZShpOiBudW1iZXIsIGo6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAvLyDliKTmlq3nvJPlrZhqIOS9jee9rueahOWAvCDlpoLmnpzmnInnm7TmjqXnlKjnvJPlrZjorqHnrpdcclxuICAgIGlmICh0aGlzLnN1bV9jYWNoZVtqXSkge1xyXG4gICAgICBpZiAoaSA9PT0gMCkgcmV0dXJuIHRoaXMuc3VtX2NhY2hlW2pdO1xyXG4gICAgICByZXR1cm4gdGhpcy5zdW1fY2FjaGVbal0gLSB0aGlzLnN1bV9jYWNoZVtpIC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6K6h566X57yT5a2YXHJcbiAgICB3aGlsZSAodGhpcy5zdW1fY2FjaGUubGVuZ3RoIC0gMSAhPT0gaikge1xyXG4gICAgICBpZiAodGhpcy5zdW1fY2FjaGUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5zdW1fY2FjaGUucHVzaCh0aGlzLm9yaWdpbkRhdGFbMF0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHN1bV9jYWNoZV9sZW4gPSB0aGlzLnN1bV9jYWNoZS5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5zdW1fY2FjaGUucHVzaChcclxuICAgICAgICAgIHRoaXMuc3VtX2NhY2hlW3N1bV9jYWNoZV9sZW4gLSAxXSArIHRoaXMub3JpZ2luRGF0YVtzdW1fY2FjaGVfbGVuXVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5zdW1SYW5nZShpLCBqKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBZb3VyIE51bUFycmF5IG9iamVjdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBhbmQgY2FsbGVkIGFzIHN1Y2g6XHJcbiAqIHZhciBvYmogPSBuZXcgTnVtQXJyYXkobnVtcylcclxuICogdmFyIHBhcmFtXzEgPSBvYmouc3VtUmFuZ2UoaSxqKVxyXG4gKi9cclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuY29uc3QgaW5zdGFuY2UgPSBuZXcgTnVtQXJyYXkoWy0yLCAwLCAzLCAtNSwgMiwgLTFdKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGluc3RhbmNlLnN1bVJhbmdlKDAsIDIpLCAxKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGluc3RhbmNlLnN1bVJhbmdlKDIsIDUpLCAtMSk7XHJcbiJdfQ==