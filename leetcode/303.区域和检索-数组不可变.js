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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 根据题意
 * 2. 会多次调用 sumRange 方法。 不能每次都做运算要有 正确的缓存机制
 * 又根据 1. 你可以假设数组不可变。 不用担心原始数据会 变化
 * */
class NumArray {
  sum_cache = [];
  originData;
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
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
      if (i === 0) return this.sum_cache[j];
      return this.sum_cache[j] - this.sum_cache[i - 1];
    }
    // 计算缓存
    while (this.sum_cache.length - 1 !== j) {
      if (this.sum_cache.length === 0) {
        this.sum_cache.push(this.originData[0]);
      } else {
        const sum_cache_len = this.sum_cache.length;
        this.sum_cache.push(
          this.sum_cache[sum_cache_len - 1] + this.originData[sum_cache_len]
        );
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzAzLuWMuuWfn+WSjOajgOe0oi3mlbDnu4TkuI3lj6/lj5guanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzMwMy7ljLrln5/lkozmo4DntKIt5pWw57uE5LiN5Y+v5Y+YLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjSTs7Ozs7QUFFSjs7OztLQUlLO0FBRUwsTUFBTSxRQUFRO0lBQ1osU0FBUyxHQUFhLEVBQUUsQ0FBQztJQUN6QixVQUFVLENBQVc7SUFFckI7O09BRUc7SUFDSCxZQUFZLElBQWM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxRQUFRLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDM0Isd0JBQXdCO1FBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUFFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7UUFFRCxPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3RDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDekM7aUJBQU07Z0JBQ0wsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUNuRSxDQUFDO2FBQ0g7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBRUQ7Ozs7R0FJRztBQUVILG9EQUE0QjtBQUU1QixNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quaVtOaVsOaVsOe7hCAgbnVtc++8jOaxguWHuuaVsOe7hOS7jue0ouW8lSBpIOWIsCBqICAoaSDiiaQgaikg6IyD5Zu05YaF5YWD57Sg55qE5oC75ZKM77yM5YyF5ZCrIGksICBqIOS4pOeCueOAglxuXG7npLrkvovvvJpcblxu57uZ5a6aIG51bXMgPSBbLTIsIDAsIDMsIC01LCAyLCAtMV3vvIzmsYLlkozlh73mlbDkuLogc3VtUmFuZ2UoKVxuXG5zdW1SYW5nZSgwLCAyKSAtPiAxXG5zdW1SYW5nZSgyLCA1KSAtPiAtMVxuc3VtUmFuZ2UoMCwgNSkgLT4gLTNcblxu6K+05piOOlxuICAgIDEuIOS9oOWPr+S7peWBh+iuvuaVsOe7hOS4jeWPr+WPmOOAglxuICAgIDIuIOS8muWkmuasoeiwg+eUqCBzdW1SYW5nZSDmlrnms5XjgIJcbiogKi9cblxuLyoqXG4gKiDmoLnmja7popjmhI9cbiAqIDIuIOS8muWkmuasoeiwg+eUqCBzdW1SYW5nZSDmlrnms5XjgIIg5LiN6IO95q+P5qyh6YO95YGa6L+Q566X6KaB5pyJIOato+ehrueahOe8k+WtmOacuuWItlxuICog5Y+I5qC55o2uIDEuIOS9oOWPr+S7peWBh+iuvuaVsOe7hOS4jeWPr+WPmOOAgiDkuI3nlKjmi4Xlv4Pljp/lp4vmlbDmja7kvJog5Y+Y5YyWXG4gKiAqL1xuXG5jbGFzcyBOdW1BcnJheSB7XG4gIHN1bV9jYWNoZTogbnVtYmVyW10gPSBbXTtcbiAgb3JpZ2luRGF0YTogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAgICovXG4gIGNvbnN0cnVjdG9yKG51bXM6IG51bWJlcltdKSB7XG4gICAgdGhpcy5vcmlnaW5EYXRhID0gbnVtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaVxuICAgKiBAcGFyYW0ge251bWJlcn0galxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBzdW1SYW5nZShpOiBudW1iZXIsIGo6IG51bWJlcik6IG51bWJlciB7XG4gICAgLy8g5Yik5pat57yT5a2YaiDkvY3nva7nmoTlgLwg5aaC5p6c5pyJ55u05o6l55So57yT5a2Y6K6h566XXG4gICAgaWYgKHRoaXMuc3VtX2NhY2hlW2pdKSB7XG4gICAgICBpZiAoaSA9PT0gMCkgcmV0dXJuIHRoaXMuc3VtX2NhY2hlW2pdO1xuICAgICAgcmV0dXJuIHRoaXMuc3VtX2NhY2hlW2pdIC0gdGhpcy5zdW1fY2FjaGVbaSAtIDFdO1xuICAgIH1cblxuICAgIC8vIOiuoeeul+e8k+WtmFxuICAgIHdoaWxlICh0aGlzLnN1bV9jYWNoZS5sZW5ndGggLSAxICE9PSBqKSB7XG4gICAgICBpZiAodGhpcy5zdW1fY2FjaGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuc3VtX2NhY2hlLnB1c2godGhpcy5vcmlnaW5EYXRhWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHN1bV9jYWNoZV9sZW4gPSB0aGlzLnN1bV9jYWNoZS5sZW5ndGg7XG4gICAgICAgIHRoaXMuc3VtX2NhY2hlLnB1c2goXG4gICAgICAgICAgdGhpcy5zdW1fY2FjaGVbc3VtX2NhY2hlX2xlbiAtIDFdICsgdGhpcy5vcmlnaW5EYXRhW3N1bV9jYWNoZV9sZW5dXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3VtUmFuZ2UoaSwgaik7XG4gIH1cbn1cblxuLyoqXG4gKiBZb3VyIE51bUFycmF5IG9iamVjdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBhbmQgY2FsbGVkIGFzIHN1Y2g6XG4gKiB2YXIgb2JqID0gbmV3IE51bUFycmF5KG51bXMpXG4gKiB2YXIgcGFyYW1fMSA9IG9iai5zdW1SYW5nZShpLGopXG4gKi9cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmNvbnN0IGluc3RhbmNlID0gbmV3IE51bUFycmF5KFstMiwgMCwgMywgLTUsIDIsIC0xXSk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoaW5zdGFuY2Uuc3VtUmFuZ2UoMCwgMiksIDEpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGluc3RhbmNlLnN1bVJhbmdlKDIsIDUpLCAtMSk7XG4iXX0=
