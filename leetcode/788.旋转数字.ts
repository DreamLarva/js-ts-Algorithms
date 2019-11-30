/*
我们称一个数 X 为好数, 如果它的每位数字逐个地被旋转 180 度后，我们仍可以得到一个有效的，且和 X 不同的数。要求每位数字都要被旋转。

如果一个数的每位数字被旋转以后仍然还是一个数字， 则这个数是有效的。0, 1, 和 8 被旋转后仍然是它们自己；2 和 5 可以互相旋转成对方；6 和 9 同理，除了这些以外其他的数字旋转以后都不再是有效的数字。

现在我们有一个正整数 N, 计算从 1 到 N 中有多少个数 X 是好数？

示例:
输入: 10
输出: 4
解释:
在[1, 10]中有四个好数： 2, 5, 6, 9。
注意 1 和 10 不是好数, 因为他们在旋转之后不变。
注意:

N 的取值范围是 [1, 10000]。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rotated-digits
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */


/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits1 = function (N: number) {
    let num = 0;
    for (let i = 1; i <= N; i++) {
        isGoodNumber(i) && num++;
    }
    return num;
};

/**
 * 规则 数字 只能是0 1 8 2 5 6 9
 * 且不能只有 1 0 组成
 * */
function isGoodNumber(num: number) {
    let isValid = false;
    while (num !== 0) {
        const remainder = num % 10;
        if ([2, 5, 6, 9].includes(remainder)) {
            isValid = true;
            num = Math.floor(num / 10);
            continue;
        }
        if ([1, 0, 8].includes(remainder)) {
            num = Math.floor(num / 10);
            continue;
        }
        return false;
    }
    return isValid;
}


var rotatedDigits2 = function (N: number) {
    let num = 0;
    for (let i = 1; i <= N; i++) {
        isGoodNumber2(i) && num++;
    }
    return num;
};
const map = [0, 0, 1, -1, -1, 1, 1, -1, 0, 1, 0];

function isGoodNumber2(num: number) {
    let isValid = 0;
    while (num !== 0) {
        const remainder = num % 10;
        if (map[remainder] === -1) {
            return false;
        }
        isValid += map[remainder];
        num = Math.floor(num / 10);
    }

    return isValid > 0;
}

import assert from "assert";

assert.strictEqual(rotatedDigits1(10), 4);
assert.strictEqual(rotatedDigits2(10), 4);


const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
suite
    .add('===', function () {
        rotatedDigits1(10)
    })
    .add('map', function () {
        rotatedDigits2(10)
    })
    // add listeners
    .on('cycle', function (event: any) {
        console.log(String(event.target));
    })
    .on('complete', function (this: any) {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({'async': false});

/**
 * === x 4,365,630 ops/sec 卤6.26% (85 runs sampled)
 * map x 17,558,885 ops/sec 卤2.90% (86 runs sampled)
 * Fastest is map
 * 这种 需要多个 可选值进行比较的 使用map 速度 快的多
 * */
