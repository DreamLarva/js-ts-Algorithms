"use strict";
/*
打乱一个没有重复元素的数组。

示例:

// 以数字集合 1, 2 和 3 初始化数组。
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
solution.shuffle();

// 重设数组到它的初始状态[1,2,3]。
solution.reset();

// 随机返回数组[1,2,3]打乱后的结果。
solution.shuffle();
* */
/**
 * Fisher–Yates shuffle 随机洗牌
 * 需要随机置乱的n个元素的数组a
 for i 从n-1到1

 j <—随机整数(0 =< j <= i)

 交换a[i]和a[j]

 end
 * */
class Solution {
  origin;
  shuffleData;
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    this.origin = nums;
    this.shuffleData = [...nums];
  }
  /**
   * Resets the array to its original configuration and return it.
   * @return {number[]}
   */
  reset() {
    return this.origin;
  }
  /**
   * Returns a random shuffling of the array.
   * @return {number[]}
   */
  shuffle() {
    const array = [...this.origin];
    let index = -1;
    const length = array.length;
    while (++index < length) {
      const rand = Math.floor(Math.random() * (length - index) + index),
        value = array[rand];
      array[rand] = array[index];
      array[index] = value;
    }
    array.length = length;
    return array;
  }
}
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzg0LuaJk+S5seaVsOe7hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzg0LuaJk+S5seaVsOe7hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJJO0FBQ0o7Ozs7Ozs7Ozs7S0FVSztBQUNMLE1BQU0sUUFBUTtJQUNaLE1BQU0sQ0FBVztJQUNqQixXQUFXLENBQVc7SUFFdEI7O09BRUc7SUFDSCxZQUFZLElBQWM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUs7UUFDSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE9BQU87UUFDTCxNQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2YsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUU1QixPQUFPLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRTtZQUN2QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsRUFDL0QsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV0QixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDdEI7UUFDRCxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN0QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FDRjtBQUVEOzs7OztHQUtHIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuaJk+S5seS4gOS4quayoeaciemHjeWkjeWFg+e0oOeahOaVsOe7hOOAglxuXG7npLrkvos6XG5cbi8vIOS7peaVsOWtl+mbhuWQiCAxLCAyIOWSjCAzIOWIneWni+WMluaVsOe7hOOAglxuaW50W10gbnVtcyA9IHsxLDIsM307XG5Tb2x1dGlvbiBzb2x1dGlvbiA9IG5ldyBTb2x1dGlvbihudW1zKTtcblxuLy8g5omT5Lmx5pWw57uEIFsxLDIsM10g5bm26L+U5Zue57uT5p6c44CC5Lu75L2VIFsxLDIsM13nmoTmjpLliJfov5Tlm57nmoTmpoLnjoflupTor6Xnm7jlkIzjgIJcbnNvbHV0aW9uLnNodWZmbGUoKTtcblxuLy8g6YeN6K6+5pWw57uE5Yiw5a6D55qE5Yid5aeL54q25oCBWzEsMiwzXeOAglxuc29sdXRpb24ucmVzZXQoKTtcblxuLy8g6ZqP5py66L+U5Zue5pWw57uEWzEsMiwzXeaJk+S5seWQjueahOe7k+aenOOAglxuc29sdXRpb24uc2h1ZmZsZSgpO1xuKiAqL1xuLyoqXG4gKiBGaXNoZXLigJNZYXRlcyBzaHVmZmxlIOmaj+acuua0l+eJjFxuICog6ZyA6KaB6ZqP5py6572u5Lmx55qEbuS4quWFg+e0oOeahOaVsOe7hGFcbiBmb3IgaSDku45uLTHliLAxXG5cbiBqIDzigJTpmo/mnLrmlbTmlbAoMCA9PCBqIDw9IGkpXG5cbiDkuqTmjaJhW2ld5ZKMYVtqXVxuXG4gZW5kXG4gKiAqL1xuY2xhc3MgU29sdXRpb24ge1xuICBvcmlnaW46IG51bWJlcltdO1xuICBzaHVmZmxlRGF0YTogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAgICovXG4gIGNvbnN0cnVjdG9yKG51bXM6IG51bWJlcltdKSB7XG4gICAgdGhpcy5vcmlnaW4gPSBudW1zO1xuICAgIHRoaXMuc2h1ZmZsZURhdGEgPSBbLi4ubnVtc107XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBhcnJheSB0byBpdHMgb3JpZ2luYWwgY29uZmlndXJhdGlvbiBhbmQgcmV0dXJuIGl0LlxuICAgKiBAcmV0dXJuIHtudW1iZXJbXX1cbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHJldHVybiB0aGlzLm9yaWdpbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcmFuZG9tIHNodWZmbGluZyBvZiB0aGUgYXJyYXkuXG4gICAqIEByZXR1cm4ge251bWJlcltdfVxuICAgKi9cbiAgc2h1ZmZsZSgpIHtcbiAgICBjb25zdCBhcnJheSA9IFsuLi50aGlzLm9yaWdpbl07XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGVuZ3RoIC0gaW5kZXgpICsgaW5kZXgpLFxuICAgICAgICB2YWx1ZSA9IGFycmF5W3JhbmRdO1xuXG4gICAgICBhcnJheVtyYW5kXSA9IGFycmF5W2luZGV4XTtcbiAgICAgIGFycmF5W2luZGV4XSA9IHZhbHVlO1xuICAgIH1cbiAgICBhcnJheS5sZW5ndGggPSBsZW5ndGg7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG59XG5cbi8qKlxuICogWW91ciBTb2x1dGlvbiBvYmplY3Qgd2lsbCBiZSBpbnN0YW50aWF0ZWQgYW5kIGNhbGxlZCBhcyBzdWNoOlxuICogdmFyIG9iaiA9IG5ldyBTb2x1dGlvbihudW1zKVxuICogdmFyIHBhcmFtXzEgPSBvYmoucmVzZXQoKVxuICogdmFyIHBhcmFtXzIgPSBvYmouc2h1ZmZsZSgpXG4gKi9cbiJdfQ==
