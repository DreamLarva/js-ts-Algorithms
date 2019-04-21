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
var mySqrt = function (x: number) {
    let y = 1.0;
    while (Math.abs((0.5 * (y + x / y)) - y) >= 0.00001) {
        y = 0.5 * (y + x / y);
    }
    return ~~y
};


console.log(mySqrt(4));
