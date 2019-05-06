/*
给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。



在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
* */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows: number) {
    if (numRows === 0) return [];
    const a1 = [1];
    if (numRows === 1) return [a1];
    const a2 = [1, 1];
    if (numRows === 2) return [a1, a2];

    const result = [a1, a2];
    for (let i = numRows - 2; i > 0; i--) {
        const lastArr = last(result);
        const temp = [];
        for (let j = 1; j < lastArr.length; j++) {
            temp.push(lastArr[j - 1] + lastArr[j]);

        }
        result.push([1, ...temp, 1]);
    }
    return result;
};


function last<T>(arr: T[]) {
    return arr[arr.length - 1];
}

import assert from "assert";
assert.deepStrictEqual(generate(5),[ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]);

