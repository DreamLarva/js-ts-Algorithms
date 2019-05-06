"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
实现 pow(x, n) ，即计算 x 的 n 次幂函数。

示例 1:

输入: 2.00000, 10
输出: 1024.00000
示例 2:

输入: 2.10000, 3
输出: 9.26100
示例 3:

输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25
说明:

-100.0 < x < 100.0
n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。
* */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    /**
     * 例 x = 2 n = 9
     * 正常算法 2 ** 9 总共做了9次乘法运算
     * 2 ** 9 = (2 * 2) ** 4 * 2 总共做了6 次乘法运算
     * 2 ** 9 = (2 * 2) ** 2 ** 2 * 2  总共做了4 次乘法运算
     * */
    let res = 1.0;
    for (let i = n; i !== 0; i = ~~(i / 2)) {
        if (i % 2 !== 0) {
            res *= x;
        }
        x *= x;
    }
    return n < 0 ? 1 / res : res;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTAuUG93KHgsbikuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzUwLlBvdyh4LG4pLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JJO0FBQ0o7Ozs7R0FJRztBQUNILElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBUyxFQUFFLENBQVM7SUFDdEM7Ozs7O1NBS0s7SUFDTCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNiLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDWjtRQUNELENBQUMsSUFBSSxDQUFDLENBQUM7S0FDVjtJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ2pDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7lrp7njrAgcG93KHgsIG4pIO+8jOWNs+iuoeeulyB4IOeahCBuIOasoeW5guWHveaVsOOAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOiAyLjAwMDAwLCAxMFxu6L6T5Ye6OiAxMDI0LjAwMDAwXG7npLrkvosgMjpcblxu6L6T5YWlOiAyLjEwMDAwLCAzXG7ovpPlh7o6IDkuMjYxMDBcbuekuuS+iyAzOlxuXG7ovpPlhaU6IDIuMDAwMDAsIC0yXG7ovpPlh7o6IDAuMjUwMDBcbuino+mHijogMi0yID0gMS8yMiA9IDEvNCA9IDAuMjVcbuivtOaYjjpcblxuLTEwMC4wIDwgeCA8IDEwMC4wXG5uIOaYryAzMiDkvY3mnInnrKblj7fmlbTmlbDvvIzlhbbmlbDlgLzojIPlm7TmmK8gW+KIkjIzMSwgMjMxIOKIkiAxXSDjgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHhcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBteVBvdyA9IGZ1bmN0aW9uICh4OiBudW1iZXIsIG46IG51bWJlcikge1xuICAgIC8qKlxuICAgICAqIOS+iyB4ID0gMiBuID0gOVxuICAgICAqIOato+W4uOeul+azlSAyICoqIDkg5oC75YWx5YGa5LqGOeasoeS5mOazlei/kOeul1xuICAgICAqIDIgKiogOSA9ICgyICogMikgKiogNCAqIDIg5oC75YWx5YGa5LqGNiDmrKHkuZjms5Xov5DnrpdcbiAgICAgKiAyICoqIDkgPSAoMiAqIDIpICoqIDIgKiogMiAqIDIgIOaAu+WFseWBmuS6hjQg5qyh5LmY5rOV6L+Q566XXG4gICAgICogKi9cbiAgICBsZXQgcmVzID0gMS4wO1xuICAgIGZvciAobGV0IGkgPSBuOyBpICE9PSAwOyBpID0gfn4oaSAvIDIpKSB7XG4gICAgICAgIGlmIChpICUgMiAhPT0gMCkge1xuICAgICAgICAgICAgcmVzICo9IHg7XG4gICAgICAgIH1cbiAgICAgICAgeCAqPSB4O1xuICAgIH1cbiAgICByZXR1cm4gbiA8IDAgPyAxIC8gcmVzIDogcmVzO1xufTtcblxuXG5leHBvcnQge31cbiJdfQ==