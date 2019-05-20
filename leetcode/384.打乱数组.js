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
    ;
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
    ;
}
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzg0LuaJk+S5seaVsOe7hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzg0LuaJk+S5seaVsOe7hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJJO0FBQ0o7Ozs7Ozs7Ozs7S0FVSztBQUNMLE1BQU0sUUFBUTtJQUtWOztPQUVHO0lBQ0gsWUFBWSxJQUFjO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFBQSxDQUFDO0lBRUY7OztPQUdHO0lBQ0gsT0FBTztRQUNILE1BQU0sS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDZixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBRTVCLE9BQU8sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUM3RCxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXhCLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUN4QjtRQUNELEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFBQSxDQUFDO0NBRUw7QUFHRDs7Ozs7R0FLRyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuaJk+S5seS4gOS4quayoeaciemHjeWkjeWFg+e0oOeahOaVsOe7hOOAglxyXG5cclxu56S65L6LOlxyXG5cclxuLy8g5Lul5pWw5a2X6ZuG5ZCIIDEsIDIg5ZKMIDMg5Yid5aeL5YyW5pWw57uE44CCXHJcbmludFtdIG51bXMgPSB7MSwyLDN9O1xyXG5Tb2x1dGlvbiBzb2x1dGlvbiA9IG5ldyBTb2x1dGlvbihudW1zKTtcclxuXHJcbi8vIOaJk+S5seaVsOe7hCBbMSwyLDNdIOW5tui/lOWbnue7k+aenOOAguS7u+S9lSBbMSwyLDNd55qE5o6S5YiX6L+U5Zue55qE5qaC546H5bqU6K+l55u45ZCM44CCXHJcbnNvbHV0aW9uLnNodWZmbGUoKTtcclxuXHJcbi8vIOmHjeiuvuaVsOe7hOWIsOWug+eahOWIneWni+eKtuaAgVsxLDIsM13jgIJcclxuc29sdXRpb24ucmVzZXQoKTtcclxuXHJcbi8vIOmaj+acuui/lOWbnuaVsOe7hFsxLDIsM13miZPkubHlkI7nmoTnu5PmnpzjgIJcclxuc29sdXRpb24uc2h1ZmZsZSgpO1xyXG4qICovXHJcbi8qKlxyXG4gKiBGaXNoZXLigJNZYXRlcyBzaHVmZmxlIOmaj+acuua0l+eJjFxyXG4gKiDpnIDopoHpmo/mnLrnva7kubHnmoRu5Liq5YWD57Sg55qE5pWw57uEYVxyXG4gZm9yIGkg5LuObi0x5YiwMVxyXG5cclxuIGogPOKAlOmaj+acuuaVtOaVsCgwID08IGogPD0gaSlcclxuXHJcbiDkuqTmjaJhW2ld5ZKMYVtqXVxyXG5cclxuIGVuZFxyXG4gKiAqL1xyXG5jbGFzcyBTb2x1dGlvbiB7XHJcbiAgICBvcmlnaW46IG51bWJlcltdO1xyXG4gICAgc2h1ZmZsZURhdGE6IG51bWJlcltdO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtczogbnVtYmVyW10pIHtcclxuICAgICAgICB0aGlzLm9yaWdpbiA9IG51bXM7XHJcbiAgICAgICAgdGhpcy5zaHVmZmxlRGF0YSA9IFsuLi5udW1zXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0cyB0aGUgYXJyYXkgdG8gaXRzIG9yaWdpbmFsIGNvbmZpZ3VyYXRpb24gYW5kIHJldHVybiBpdC5cclxuICAgICAqIEByZXR1cm4ge251bWJlcltdfVxyXG4gICAgICovXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW47XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIHJhbmRvbSBzaHVmZmxpbmcgb2YgdGhlIGFycmF5LlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyW119XHJcbiAgICAgKi9cclxuICAgIHNodWZmbGUoKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBbLi4udGhpcy5vcmlnaW5dO1xyXG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsZW5ndGggLSBpbmRleCkgKyBpbmRleCksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGFycmF5W3JhbmRdO1xyXG5cclxuICAgICAgICAgICAgYXJyYXlbcmFuZF0gPSBhcnJheVtpbmRleF07XHJcbiAgICAgICAgICAgIGFycmF5W2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhcnJheS5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfTtcclxuXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogWW91ciBTb2x1dGlvbiBvYmplY3Qgd2lsbCBiZSBpbnN0YW50aWF0ZWQgYW5kIGNhbGxlZCBhcyBzdWNoOlxyXG4gKiB2YXIgb2JqID0gbmV3IFNvbHV0aW9uKG51bXMpXHJcbiAqIHZhciBwYXJhbV8xID0gb2JqLnJlc2V0KClcclxuICogdmFyIHBhcmFtXzIgPSBvYmouc2h1ZmZsZSgpXHJcbiAqL1xyXG4iXX0=