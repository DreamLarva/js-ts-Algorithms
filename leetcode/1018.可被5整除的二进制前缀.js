/*
给定由若干 0 和 1 组成的数组 A。我们定义 N_i：从 A[0] 到 A[i] 的第 i 个子数组被解释为一个二进制数（从最高有效位到最低有效位）。

返回布尔值列表 answer，只有当 N_i 可以被 5 整除时，答案 answer[i] 为 true，否则为 false。



示例 1：

输入：[0,1,1]
输出：[true,false,false]
解释：
输入数字为 0, 01, 011；也就是十进制中的 0, 1, 3 。只有第一个数可以被 5 整除，因此 answer[0] 为真。
示例 2：

输入：[1,1,1]
输出：[false,false,false]
示例 3：

输入：[0,1,1,1,1,1]
输出：[true,false,false,false,true,false]
示例 4：

输入：[1,1,1,0,1]
输出：[false,false,false,false,false]

提示：
1 <= A.length <= 30000
A[i] 为 0 或 1
* */

/**
 * @param {number[]} A
 * @return {boolean[]}
 */
/**
 * 正确的解法
 * */
function prefixesDivBy52(A){
    // 暂存上一次的结果
    let num = 0;
    return A.map(val => {
        // 被除数 * 2 除数不变 的话 那么原来商 * 2 原来余数 * 2
        // 但是 商 和 除数 是不影响 余数的 所以 只需要保留 余数 * 2 即可
        num = ((num << 1) + val) % 5;
        return num % 5 === 0;
    })
}


var prefixesDivBy5 = function (A) {
    let index = 0;
    const result = [];
    while (index < A.length) {
        result.push(isPrefixesDivBy5(A.slice(0, index + 1)));
        index++;
    }
    return result
};

const remainder_map = [6, 2, 4, 8];

// 二进制数字 按照规律反复出现
function isPrefixesDivBy5(arr) {
    const last = arr[arr.length - 1];

    arr.reverse();
    const all_single = arr.reduce((pre, cur, index) => {
        if (cur === 0 || index === 0) return pre;
        return pre + remainder_map[index % 4];
    }, 0);
    return (all_single + last) % 5 === 0;
}




const assert = require("assert");
assert.deepStrictEqual(
    prefixesDivBy5([0, 1, 1]),
    [true, false, false]
);

assert.deepStrictEqual(
    prefixesDivBy5([0, 1, 1, 1, 1, 1]),
    [true, false, false, false, true, false]
);

assert.deepStrictEqual(
    prefixesDivBy5([1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1]),
    [false, false, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, false, false, false]
);

