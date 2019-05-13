/*
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明：
num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
* */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    /**
     * 根据题意 使用字符串是 可能 num1 和 num2 可能大于 2*32 次方
     * 但又不允许使用 bigInt 类型
     * js 能够保证计算精度的 数字必须在 ( Number.MAX_SAFE_INTEGER)2 ** 53 - 1 内
     * */
        // 两个数字相乘 又不超过  Number.MAX_SAFE_INTEGER
    const num1_len = num1.length;
    const num2_len = num2.length;
    if (num1_len <= 2 && num2_len <= 2) {
        return String(num1 * +num2);
    }

    // 将 num1 和 num2 对分
    const nums1_left = num1.slice(0, num1_len >> 1),
        nums1_right = num1

};

