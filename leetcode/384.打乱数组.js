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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzg0LuaJk+S5seaVsOe7hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzg0LuaJk+S5seaVsOe7hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJJO0FBQ0o7Ozs7Ozs7Ozs7S0FVSztBQUNMLE1BQU0sUUFBUTtJQUlaOztPQUVHO0lBQ0gsWUFBWSxJQUFjO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLO1FBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxPQUFPO1FBQ0wsTUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNmLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFFNUIsT0FBTyxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQUU7WUFDdkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQy9ELEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO1FBQ0QsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0Y7QUFFRDs7Ozs7R0FLRyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7miZPkubHkuIDkuKrmsqHmnInph43lpI3lhYPntKDnmoTmlbDnu4TjgIJcblxu56S65L6LOlxuXG4vLyDku6XmlbDlrZfpm4blkIggMSwgMiDlkowgMyDliJ3lp4vljJbmlbDnu4TjgIJcbmludFtdIG51bXMgPSB7MSwyLDN9O1xuU29sdXRpb24gc29sdXRpb24gPSBuZXcgU29sdXRpb24obnVtcyk7XG5cbi8vIOaJk+S5seaVsOe7hCBbMSwyLDNdIOW5tui/lOWbnue7k+aenOOAguS7u+S9lSBbMSwyLDNd55qE5o6S5YiX6L+U5Zue55qE5qaC546H5bqU6K+l55u45ZCM44CCXG5zb2x1dGlvbi5zaHVmZmxlKCk7XG5cbi8vIOmHjeiuvuaVsOe7hOWIsOWug+eahOWIneWni+eKtuaAgVsxLDIsM13jgIJcbnNvbHV0aW9uLnJlc2V0KCk7XG5cbi8vIOmaj+acuui/lOWbnuaVsOe7hFsxLDIsM13miZPkubHlkI7nmoTnu5PmnpzjgIJcbnNvbHV0aW9uLnNodWZmbGUoKTtcbiogKi9cbi8qKlxuICogRmlzaGVy4oCTWWF0ZXMgc2h1ZmZsZSDpmo/mnLrmtJfniYxcbiAqIOmcgOimgemaj+acuue9ruS5seeahG7kuKrlhYPntKDnmoTmlbDnu4RhXG4gZm9yIGkg5LuObi0x5YiwMVxuXG4gaiA84oCU6ZqP5py65pW05pWwKDAgPTwgaiA8PSBpKVxuXG4g5Lqk5o2iYVtpXeWSjGFbal1cblxuIGVuZFxuICogKi9cbmNsYXNzIFNvbHV0aW9uIHtcbiAgb3JpZ2luOiBudW1iZXJbXTtcbiAgc2h1ZmZsZURhdGE6IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihudW1zOiBudW1iZXJbXSkge1xuICAgIHRoaXMub3JpZ2luID0gbnVtcztcbiAgICB0aGlzLnNodWZmbGVEYXRhID0gWy4uLm51bXNdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgYXJyYXkgdG8gaXRzIG9yaWdpbmFsIGNvbmZpZ3VyYXRpb24gYW5kIHJldHVybiBpdC5cbiAgICogQHJldHVybiB7bnVtYmVyW119XG4gICAqL1xuICByZXNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcmlnaW47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHJhbmRvbSBzaHVmZmxpbmcgb2YgdGhlIGFycmF5LlxuICAgKiBAcmV0dXJuIHtudW1iZXJbXX1cbiAgICovXG4gIHNodWZmbGUoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbLi4udGhpcy5vcmlnaW5dO1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGxlbmd0aCAtIGluZGV4KSArIGluZGV4KSxcbiAgICAgICAgdmFsdWUgPSBhcnJheVtyYW5kXTtcblxuICAgICAgYXJyYXlbcmFuZF0gPSBhcnJheVtpbmRleF07XG4gICAgICBhcnJheVtpbmRleF0gPSB2YWx1ZTtcbiAgICB9XG4gICAgYXJyYXkubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxufVxuXG4vKipcbiAqIFlvdXIgU29sdXRpb24gb2JqZWN0IHdpbGwgYmUgaW5zdGFudGlhdGVkIGFuZCBjYWxsZWQgYXMgc3VjaDpcbiAqIHZhciBvYmogPSBuZXcgU29sdXRpb24obnVtcylcbiAqIHZhciBwYXJhbV8xID0gb2JqLnJlc2V0KClcbiAqIHZhciBwYXJhbV8yID0gb2JqLnNodWZmbGUoKVxuICovXG4iXX0=