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
            // 注意此处的是 取 floor 所以上限是 + 1 的
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzg0LuaJk+S5seaVsOe7hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzg0LuaJk+S5seaVsOe7hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJJO0FBQ0o7Ozs7Ozs7Ozs7S0FVSztBQUNMLE1BQU0sUUFBUTtJQUtWOztPQUVHO0lBQ0gsWUFBWSxJQUFjO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFBQSxDQUFDO0lBRUY7OztPQUdHO0lBQ0gsT0FBTztRQUNILE1BQU0sS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDZixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBRTVCLE9BQU8sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUM3RCxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXhCLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUN4QjtRQUNELEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFBQSxDQUFDO0NBRUw7QUFHRDs7Ozs7R0FLRyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7miZPkubHkuIDkuKrmsqHmnInph43lpI3lhYPntKDnmoTmlbDnu4TjgIJcblxu56S65L6LOlxuXG4vLyDku6XmlbDlrZfpm4blkIggMSwgMiDlkowgMyDliJ3lp4vljJbmlbDnu4TjgIJcbmludFtdIG51bXMgPSB7MSwyLDN9O1xuU29sdXRpb24gc29sdXRpb24gPSBuZXcgU29sdXRpb24obnVtcyk7XG5cbi8vIOaJk+S5seaVsOe7hCBbMSwyLDNdIOW5tui/lOWbnue7k+aenOOAguS7u+S9lSBbMSwyLDNd55qE5o6S5YiX6L+U5Zue55qE5qaC546H5bqU6K+l55u45ZCM44CCXG5zb2x1dGlvbi5zaHVmZmxlKCk7XG5cbi8vIOmHjeiuvuaVsOe7hOWIsOWug+eahOWIneWni+eKtuaAgVsxLDIsM13jgIJcbnNvbHV0aW9uLnJlc2V0KCk7XG5cbi8vIOmaj+acuui/lOWbnuaVsOe7hFsxLDIsM13miZPkubHlkI7nmoTnu5PmnpzjgIJcbnNvbHV0aW9uLnNodWZmbGUoKTtcbiogKi9cbi8qKlxuICogRmlzaGVy4oCTWWF0ZXMgc2h1ZmZsZSDpmo/mnLrmtJfniYxcbiAqIOmcgOimgemaj+acuue9ruS5seeahG7kuKrlhYPntKDnmoTmlbDnu4RhXG4gZm9yIGkg5LuObi0x5YiwMVxuXG4gaiA84oCU6ZqP5py65pW05pWwKDAgPTwgaiA8PSBpKVxuXG4g5Lqk5o2iYVtpXeWSjGFbal1cblxuIGVuZFxuICogKi9cbmNsYXNzIFNvbHV0aW9uIHtcbiAgICBvcmlnaW46IG51bWJlcltdO1xuICAgIHNodWZmbGVEYXRhOiBudW1iZXJbXTtcblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG51bXM6IG51bWJlcltdKSB7XG4gICAgICAgIHRoaXMub3JpZ2luID0gbnVtcztcbiAgICAgICAgdGhpcy5zaHVmZmxlRGF0YSA9IFsuLi5udW1zXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIGFycmF5IHRvIGl0cyBvcmlnaW5hbCBjb25maWd1cmF0aW9uIGFuZCByZXR1cm4gaXQuXG4gICAgICogQHJldHVybiB7bnVtYmVyW119XG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9yaWdpbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJhbmRvbSBzaHVmZmxpbmcgb2YgdGhlIGFycmF5LlxuICAgICAqIEByZXR1cm4ge251bWJlcltdfVxuICAgICAqL1xuICAgIHNodWZmbGUoKSB7XG4gICAgICAgIGNvbnN0IGFycmF5ID0gWy4uLnRoaXMub3JpZ2luXTtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsZW5ndGggLSBpbmRleCkgKyBpbmRleCksXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBhcnJheVtyYW5kXTtcblxuICAgICAgICAgICAgYXJyYXlbcmFuZF0gPSBhcnJheVtpbmRleF07XG4gICAgICAgICAgICBhcnJheVtpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBhcnJheS5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9O1xuXG59XG5cblxuLyoqXG4gKiBZb3VyIFNvbHV0aW9uIG9iamVjdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBhbmQgY2FsbGVkIGFzIHN1Y2g6XG4gKiB2YXIgb2JqID0gbmV3IFNvbHV0aW9uKG51bXMpXG4gKiB2YXIgcGFyYW1fMSA9IG9iai5yZXNldCgpXG4gKiB2YXIgcGFyYW1fMiA9IG9iai5zaHVmZmxlKClcbiAqL1xuIl19
