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
            const rand = Math.floor(Math.random() * (length - index) + index), value = array[rand];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzg0LuaJk+S5seaVsOe7hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzg0LuaJk+S5seaVsOe7hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJJO0FBQ0o7Ozs7Ozs7Ozs7S0FVSztBQUNMLE1BQU0sUUFBUTtJQUlaOztPQUVHO0lBQ0gsWUFBWSxJQUFjO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLO1FBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxPQUFPO1FBQ0wsTUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNmLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFFNUIsT0FBTyxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQUU7WUFDdkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQy9ELEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO1FBQ0QsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0Y7QUFFRDs7Ozs7R0FLRyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuaJk+S5seS4gOS4quayoeaciemHjeWkjeWFg+e0oOeahOaVsOe7hOOAglxyXG5cclxu56S65L6LOlxyXG5cclxuLy8g5Lul5pWw5a2X6ZuG5ZCIIDEsIDIg5ZKMIDMg5Yid5aeL5YyW5pWw57uE44CCXHJcbmludFtdIG51bXMgPSB7MSwyLDN9O1xyXG5Tb2x1dGlvbiBzb2x1dGlvbiA9IG5ldyBTb2x1dGlvbihudW1zKTtcclxuXHJcbi8vIOaJk+S5seaVsOe7hCBbMSwyLDNdIOW5tui/lOWbnue7k+aenOOAguS7u+S9lSBbMSwyLDNd55qE5o6S5YiX6L+U5Zue55qE5qaC546H5bqU6K+l55u45ZCM44CCXHJcbnNvbHV0aW9uLnNodWZmbGUoKTtcclxuXHJcbi8vIOmHjeiuvuaVsOe7hOWIsOWug+eahOWIneWni+eKtuaAgVsxLDIsM13jgIJcclxuc29sdXRpb24ucmVzZXQoKTtcclxuXHJcbi8vIOmaj+acuui/lOWbnuaVsOe7hFsxLDIsM13miZPkubHlkI7nmoTnu5PmnpzjgIJcclxuc29sdXRpb24uc2h1ZmZsZSgpO1xyXG4qICovXHJcbi8qKlxyXG4gKiBGaXNoZXLigJNZYXRlcyBzaHVmZmxlIOmaj+acuua0l+eJjFxyXG4gKiDpnIDopoHpmo/mnLrnva7kubHnmoRu5Liq5YWD57Sg55qE5pWw57uEYVxyXG4gZm9yIGkg5LuObi0x5YiwMVxyXG5cclxuIGogPOKAlOmaj+acuuaVtOaVsCgwID08IGogPD0gaSlcclxuXHJcbiDkuqTmjaJhW2ld5ZKMYVtqXVxyXG5cclxuIGVuZFxyXG4gKiAqL1xyXG5jbGFzcyBTb2x1dGlvbiB7XHJcbiAgb3JpZ2luOiBudW1iZXJbXTtcclxuICBzaHVmZmxlRGF0YTogbnVtYmVyW107XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihudW1zOiBudW1iZXJbXSkge1xyXG4gICAgdGhpcy5vcmlnaW4gPSBudW1zO1xyXG4gICAgdGhpcy5zaHVmZmxlRGF0YSA9IFsuLi5udW1zXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0cyB0aGUgYXJyYXkgdG8gaXRzIG9yaWdpbmFsIGNvbmZpZ3VyYXRpb24gYW5kIHJldHVybiBpdC5cclxuICAgKiBAcmV0dXJuIHtudW1iZXJbXX1cclxuICAgKi9cclxuICByZXNldCgpIHtcclxuICAgIHJldHVybiB0aGlzLm9yaWdpbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSByYW5kb20gc2h1ZmZsaW5nIG9mIHRoZSBhcnJheS5cclxuICAgKiBAcmV0dXJuIHtudW1iZXJbXX1cclxuICAgKi9cclxuICBzaHVmZmxlKCkge1xyXG4gICAgY29uc3QgYXJyYXkgPSBbLi4udGhpcy5vcmlnaW5dO1xyXG4gICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsZW5ndGggLSBpbmRleCkgKyBpbmRleCksXHJcbiAgICAgICAgdmFsdWUgPSBhcnJheVtyYW5kXTtcclxuXHJcbiAgICAgIGFycmF5W3JhbmRdID0gYXJyYXlbaW5kZXhdO1xyXG4gICAgICBhcnJheVtpbmRleF0gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGFycmF5Lmxlbmd0aCA9IGxlbmd0aDtcclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBZb3VyIFNvbHV0aW9uIG9iamVjdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBhbmQgY2FsbGVkIGFzIHN1Y2g6XHJcbiAqIHZhciBvYmogPSBuZXcgU29sdXRpb24obnVtcylcclxuICogdmFyIHBhcmFtXzEgPSBvYmoucmVzZXQoKVxyXG4gKiB2YXIgcGFyYW1fMiA9IG9iai5zaHVmZmxlKClcclxuICovXHJcbiJdfQ==