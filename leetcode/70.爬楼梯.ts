/*
[70] 爬楼梯

https://leetcode-cn.com/problems/climbing-stairs/description/

Tags: algorithms adobe apple dynamic-programming

Langs: c cpp csharp golang java javascript kotlin php python python3 ruby rust scala swift

* algorithms
* Easy (44.62%)
* Total Accepted: 35.6K
* Total Submissions: 79.5K
* Testcase Example: '2'

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶

示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶

*/

/**
 * @param {number} n
 * @return {number}
 */

/**
 * 假设有 n 级台阶
 * 现在知道 n - 1 级台阶走法 a 现在到 n 级 都有一种走法就是  +1
 * 现在知道 n - 2 级台阶的走法 b 现在到n 级 都有一种走法 就是 +2
 * 所以是动态规划问题 n 级台阶的走法是 n-1级的走法 + n-2级的走法
 * fn(n) = fn(n - 1) + fn(n - 2)
 * */
function solution1(n:number) {
    if (n === 1) return 1;
    let current = 1;
    let last = 1;

    while (--n) {
        const temp = current + last;
        last = current;
        current = temp
    }

    return current
}

/**
 * 既然是斐波那契数列就能够使用斐波那契通项公式
 * */
function solution2(n:number) {
    const sqrt_5 = Math.sqrt(5);
    n = n + 1;
    return sqrt_5 / 5 * (
        Math.pow((1 + sqrt_5) / 2, n) - Math.pow((1 - sqrt_5) / 2, n)
    )
}

console.log(solution2(4))
