/*
不使用运算符 + 和 - ​​​​​​​，计算两整数 ​​​​​​​a 、b ​​​​​​​之和。

示例 1:

输入: a = 1, b = 2
输出: 3
示例 2:

输入: a = -2, b = 3
输出: 1
* */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a: number, b: number): number {
    // 负数的表示
    // 符号位为1  其他位反码  然后 -1
    // 由于 符号位不同 一个正数 一个负数 做 异或运算 一定是负数
    const sum = a ^ b;
    // 表示 是不是还有没有进位的 位
    const carry = (a & b) << 1;
    if (carry) return getSum(sum, carry);
    return sum;
};
var getSum2 = function (a: number, b: number): number {
    while(b != 0){
        let sum = a ^ b;
        let carry = (a & b) << 1;
        a = sum;
        b = carry;
    }
    return a
};




import assert from "assert";

assert.strictEqual(
    getSum(1, 2),
    3,
);

assert.strictEqual(
    getSum(-2, 3),
    1,
);
assert.strictEqual(
    getSum(-9, -1),
    -10,
);
import Benchmark from "benchmark";
const suite = new Benchmark.Suite;
suite
    .add('recursion', function () {
        getSum(99999,-1);
    })
    .add('loop', function () {
        getSum2(99999,-1);
    })
    .on('cycle', function (event: Benchmark.Event) {
        console.log(String(event.target));
    })
    .on('complete', function (this: Benchmark.Suite) {
        // console.log('Fastest is ' + this.filter('fastest').map( 'name'));
    })
    // run async
    .run({'async': false});
