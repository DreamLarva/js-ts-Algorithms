/*
初始时有 n 个灯泡关闭。 第 1 轮，你打开所有的灯泡。 第 2 轮，每两个灯泡你关闭一次。 第 3 轮，
每三个灯泡切换一次开关（如果关闭则开启，如果开启则关闭）。第 i 轮，每 i 个灯泡切换一次开关。
 对于第 n 轮，你只切换最后一个灯泡的开关。 找出 n 轮后有多少个亮着的灯泡。

示例:

输入: 3
输出: 1
解释:
初始时, 灯泡状态 [关闭, 关闭, 关闭].
第一轮后, 灯泡状态 [开启, 开启, 开启].
第二轮后, 灯泡状态 [开启, 关闭, 开启].
第三轮后, 灯泡状态 [开启, 关闭, 关闭].

你应该返回 1，因为只有一个灯泡还亮着。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/bulb-switcher
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n: number) {
    // 第一轮的意思其实就是 每一个灯泡操作一次
    // 那么只要 操作次数为 偶数次 就会把灯泡关闭
    // 所以结果就是 只能操作 奇数次的数
    // 结果是 所有完全平方数 因为 如 4 = 2 * 2  在 2 的时候开了 但是不可能 出现再按照2 开关的情况 所以就会多出这次

    return Math.floor(n ** 0.5);

};


import assert from 'assert';

assert.strictEqual(bulbSwitch(100), 10);
assert.strictEqual(bulbSwitch(3), 1);
