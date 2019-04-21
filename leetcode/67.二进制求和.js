/*
[67] 二进制求和

https://leetcode-cn.com/problems/add-binary/description/

Tags: algorithms facebook math string

Langs: c cpp csharp golang java javascript kotlin php python python3 ruby rust scala swift

* algorithms
* Easy (46.81%)
* Total Accepted: 18.5K
* Total Submissions: 39.4K
* Testcase Example: '"11"\n"1"'

给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为非空字符串且只包含数字 1 和 0。

示例 1:

输入: a = "11", b = "1"
输出: "100"

示例 2:

输入: a = "1010", b = "1011"
输出: "10101"

 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let result = "";
    let carry_over = 0;
    let a_index = a.length - 1;
    let b_index = b.length - 1;
    while (carry_over === 1 || a_index >= 0 || b_index >= 0) {
        let count_1 = carry_over;
        if(a[a_index]) count_1 += parseInt(a[a_index]);
        if(b[b_index]) count_1 += parseInt(b[b_index]);

        if (count_1 === 0) {
            result = "0" + result;
            carry_over = 0;
        } else if (count_1 === 1) {
            result = "1" + result;
            carry_over = 0;
        } else if (count_1 === 2) {
            result = "0" + result;
            carry_over = 1;
        } else if (count_1 === 3) {
            result = "1" + result;
            carry_over = 1;
        }
        a_index--;
        b_index--;
    }
    return result
};

/**
 * best performance
 * */
var addBinary2 = function (a, b) {
    let [i, j] = [a.length - 1, b.length - 1];
    let carry = 0;
    let ans = "";
    while (i >= 0 || j >= 0 || carry) {
        let sum = 0;
        if (i >= 0) sum += a[i] - "0";
        if (j >= 0) sum += b[j] - "0";
        sum += carry;
        carry = ~~(sum / 2);
        sum = sum % 2;
        ans = sum + ans;
        i--;
        j--;
    }
    return ans;
};


const assert = require("assert");
assert.strictEqual(
    addBinary2("11", "1"),
    "100"
);
assert.strictEqual(
    addBinary("1010", "1011"),
    "10101"
);
const benchmark = require('benchmark');
const suite = new benchmark.Suite;
const args = ["1111001010000100101000001001111111111111111111111111111111111111111111111111111111111111111111","1100011111111101000000000000000000111111111111111111111111111111100000000000000000111000100"]
suite
    .add('1', function () {
        addBinary2(...args)

    })
    .add('2', function () {
        addBinary(...args)

    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({'async': false});
