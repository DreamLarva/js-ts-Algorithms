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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjkueOeahOW5s+aWueaguS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNjkueOeahOW5s+aWueaguS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0NFO0FBQ0Y7O0tBRUs7QUFDTCxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQVM7SUFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ1osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBRTtRQUNqRCxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN6QjtJQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNmLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5bNjldIHgg55qE5bmz5pa55qC5XG5cbmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3NxcnR4L2Rlc2NyaXB0aW9uL1xuXG5UYWdzOiBhbGdvcml0aG1zIGFwcGxlIGJsb29tYmVyZyBmYWNlYm9vayBiaW5hcnktc2VhcmNoIG1hdGhcblxuTGFuZ3M6IGMgY3BwIGNzaGFycCBnb2xhbmcgamF2YSBqYXZhc2NyaXB0IGtvdGxpbiBwaHAgcHl0aG9uIHB5dGhvbjMgcnVieSBydXN0IHNjYWxhIHN3aWZ0XG5cbiogYWxnb3JpdGhtc1xuKiBFYXN5ICgzNC45NSUpXG4qIFRvdGFsIEFjY2VwdGVkOiAyNi42S1xuKiBUb3RhbCBTdWJtaXNzaW9uczogNzZLXG4qIFRlc3RjYXNlIEV4YW1wbGU6ICc0J1xuXG7lrp7njrAgaW50IHNxcnQoaW50IHgpIOWHveaVsOOAglxuXG7orqHnrpflubbov5Tlm54geCDnmoTlubPmlrnmoLnvvIzlhbbkuK0geCDmmK/pnZ7otJ/mlbTmlbDjgIJcblxu55Sx5LqO6L+U5Zue57G75Z6L5piv5pW05pWw77yM57uT5p6c5Y+q5L+d55WZ5pW05pWw55qE6YOo5YiG77yM5bCP5pWw6YOo5YiG5bCG6KKr6IiN5Y6744CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IDRcbui+k+WHujogMlxuXG5cbuekuuS+iyAyOlxuXG7ovpPlhaU6IDhcbui+k+WHujogMlxu6K+05piOOiA4IOeahOW5s+aWueagueaYryAyLjgyODQyLi4uLFxu55Sx5LqO6L+U5Zue57G75Z6L5piv5pW05pWw77yM5bCP5pWw6YOo5YiG5bCG6KKr6IiN5Y6744CCXG5cbiovXG4vKipcbiAqIOeJm+mhv+i/reS7o+azlVxuICogKi9cbnZhciBteVNxcnQgPSBmdW5jdGlvbiAoeDogbnVtYmVyKSB7XG4gICAgbGV0IHkgPSAxLjA7XG4gICAgd2hpbGUgKE1hdGguYWJzKCgwLjUgKiAoeSArIHggLyB5KSkgLSB5KSA+PSAwLjAwMDAxKSB7XG4gICAgICAgIHkgPSAwLjUgKiAoeSArIHggLyB5KTtcbiAgICB9XG4gICAgcmV0dXJuIH5+eTtcbn07XG5cblxuZXhwb3J0IHt9XG4iXX0=