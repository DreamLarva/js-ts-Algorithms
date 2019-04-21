/*
给定一个正整数，返回它在 Excel 表中相对应的列名称。

例如，

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB
    ...
示例 1:

输入: 1
输出: "A"
示例 2:

输入: 28
输出: "AB"
示例 3:

输入: 701
输出: "ZY"
* */

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    let result = "";

    // 相当于 27进制
    do {
        // 这里 取模 如果为 0 则是 Z; 1 是 a
        n--;
        result = String.fromCharCode(65 + n % 26) + result;
        n = ~~(n / 26)
    } while (n > 0);
    return result
};

console.log(convertToTitle( 27));
