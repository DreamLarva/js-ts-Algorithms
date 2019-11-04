"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
[69] x 的平方根

https://leetcode-cn.com/problems/sqrtx/description/

Tags: algorithms apple bloomberg facebook binary-search math

Langs: c cpp csharp golang java javascript kotlin php python python3 ruby rust scala swift

* algorithms
* Easy (34.95%)
* Total Accepted: 26.6K
* Total Submissions: 76K
* Testcase Example: '4'

实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2


示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842...,
由于返回类型是整数，小数部分将被舍去。

*/
/**
 * 牛顿迭代法
 * */
var mySqrt = function (x) {
    let y = 1.0;
    while (Math.abs((0.5 * (y + x / y)) - y) >= 0.00001) {
        y = 0.5 * (y + x / y);
    }
    return ~~y;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjkueOeahOW5s+aWueaguS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNjkueOeahOW5s+aWueaguS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0NFO0FBQ0Y7O0tBRUs7QUFDTCxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQVM7SUFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ1osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBRTtRQUNqRCxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN6QjtJQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNmLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbls2OV0geCDnmoTlubPmlrnmoLlcclxuXHJcbmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3NxcnR4L2Rlc2NyaXB0aW9uL1xyXG5cclxuVGFnczogYWxnb3JpdGhtcyBhcHBsZSBibG9vbWJlcmcgZmFjZWJvb2sgYmluYXJ5LXNlYXJjaCBtYXRoXHJcblxyXG5MYW5nczogYyBjcHAgY3NoYXJwIGdvbGFuZyBqYXZhIGphdmFzY3JpcHQga290bGluIHBocCBweXRob24gcHl0aG9uMyBydWJ5IHJ1c3Qgc2NhbGEgc3dpZnRcclxuXHJcbiogYWxnb3JpdGhtc1xyXG4qIEVhc3kgKDM0Ljk1JSlcclxuKiBUb3RhbCBBY2NlcHRlZDogMjYuNktcclxuKiBUb3RhbCBTdWJtaXNzaW9uczogNzZLXHJcbiogVGVzdGNhc2UgRXhhbXBsZTogJzQnXHJcblxyXG7lrp7njrAgaW50IHNxcnQoaW50IHgpIOWHveaVsOOAglxyXG5cclxu6K6h566X5bm26L+U5ZueIHgg55qE5bmz5pa55qC577yM5YW25LitIHgg5piv6Z2e6LSf5pW05pWw44CCXHJcblxyXG7nlLHkuo7ov5Tlm57nsbvlnovmmK/mlbTmlbDvvIznu5Pmnpzlj6rkv53nlZnmlbTmlbDnmoTpg6jliIbvvIzlsI/mlbDpg6jliIblsIbooqvoiI3ljrvjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiA0XHJcbui+k+WHujogMlxyXG5cclxuXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOiA4XHJcbui+k+WHujogMlxyXG7or7TmmI46IDgg55qE5bmz5pa55qC55pivIDIuODI4NDIuLi4sXHJcbueUseS6jui/lOWbnuexu+Wei+aYr+aVtOaVsO+8jOWwj+aVsOmDqOWIhuWwhuiiq+iIjeWOu+OAglxyXG5cclxuKi9cclxuLyoqXHJcbiAqIOeJm+mhv+i/reS7o+azlVxyXG4gKiAqL1xyXG52YXIgbXlTcXJ0ID0gZnVuY3Rpb24gKHg6IG51bWJlcikge1xyXG4gICAgbGV0IHkgPSAxLjA7XHJcbiAgICB3aGlsZSAoTWF0aC5hYnMoKDAuNSAqICh5ICsgeCAvIHkpKSAtIHkpID49IDAuMDAwMDEpIHtcclxuICAgICAgICB5ID0gMC41ICogKHkgKyB4IC8geSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gfn55O1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCB7fVxyXG4iXX0=